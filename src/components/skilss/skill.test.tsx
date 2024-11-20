import {render, screen, fireEvent} from "@testing-library/react"
import Skills from "./skil"

describe("Skills", ()=>{
    const skills = ["HTML", "CSS", "JS"]
    test("Renders Correctly", ()=>{

       
        render(<Skills skills={skills}/>)
        const listElelemt = screen.getByRole("list")

        expect(listElelemt).toBeInTheDocument()
    })

    test("Renders all list Items", ()=>{
     
        render(<Skills skills={skills}/>)

        const listingItems = screen.getAllByRole("listitem")
        expect(listingItems).toHaveLength(skills.length)
    })

    test("Render loginbutton", ()=>{
        
        render(<Skills skills={skills}/>)

        const getButton = screen.getByRole("button",{
            name:"Log In"
        })
        expect(getButton).toBeInTheDocument()
    })

    test("Start Learingi not rendered", ()=>{
        render(<Skills skills={skills}/>)

        //when that particular not yet present in the dom we can try checking with querryByAll etc methods

        const getStartLearning = screen.queryByRole("button",{
            name:"Start Learning"
        })
        expect(getStartLearning).not.toBeInTheDocument()
    })

    test("Start learinig button eventually displayed", async ()=>{
        render(<Skills skills={skills}/>)

        const getButtonElement = await screen.findByRole("button", {
            name: "Start Learning"
        })

        expect(getButtonElement).toBeInTheDocument()
    })
})