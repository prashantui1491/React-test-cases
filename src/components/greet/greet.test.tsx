// red green testing

// custom matchers = https://github.com/testing-library/jest-dom

import Greet from "./greet"
import {render, screen} from '@testing-library/react'

//1 st case render Hello
//2 render with name Prahsant
//greet for grouping the test casesw

describe.skip("Greet", ()=>{
    test("Render gret component woth Hello", ()=>{
    render(<Greet/>)

    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
})

test("Render with Name", ()=>{
    render(<Greet name="Prashant"/>)

    const textElement = screen.getByText("Hello Prashant")
    expect(textElement).toBeInTheDocument()
})
})

