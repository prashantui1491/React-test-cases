import { Application } from "./application";
import {getByTestId, render, screen} from '@testing-library/react'

describe.skip("Application Test cases", ()=>{
    test("Application renders 1", ()=>{
        render(<Application/>)
        
        const textElelemnt = screen.getByRole("textbox",{
            name: "Name"
        })
        expect(textElelemnt).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsConditoinalElement = screen.getByRole("checkbox")
        expect(termsConditoinalElement).toBeInTheDocument()

        const buttonElelemnt = screen.getByRole("button")
        expect(buttonElelemnt).toBeInTheDocument()

        const textAreaElelemt = screen.getByRole("textbox", {
            name: "Bio"
        })
        expect(textAreaElelemt).toBeInTheDocument()

        const headingElement1 = screen.getByRole("heading", {
            // name: "Job application form",
            level:1
        })
        expect(headingElement1).toBeInTheDocument()

        const headingElement2 = screen.getByRole("heading", {
            // name: "Section 1",
            level: 2
        })
        expect(headingElement2).toBeInTheDocument()

        const textElelemntByLableText = screen.getByLabelText("Name", {
            selector: "input"
        })
        expect(textElelemntByLableText).toBeInTheDocument()

        const termsElement = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement).toBeInTheDocument()

        const placeHolderElelemt = screen.getByPlaceholderText("Fullname")
        expect(placeHolderElelemt).toBeInTheDocument()

        const getTextElement = screen.getByText("all f", {exact: false})
        expect(getTextElement).toBeInTheDocument()

        const getByValue = screen.getByDisplayValue("Vishwas")
        expect(getByValue).toBeInTheDocument()

        const getByAlt = screen.getByAltText("laptop")
        expect(getByAlt).toBeInTheDocument()

        const getByTitle = screen.getByTitle("close")
        expect(getByTitle).toBeInTheDocument()

        const getByTestId = screen.getByTestId("custom-element")
        expect(getByTestId).toBeInTheDocument()

    })
})

