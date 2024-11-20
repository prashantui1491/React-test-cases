import sum from './sum'

// custom matchers = https://github.com/testing-library/jest-dom

describe.skip('TestMatches', () => { 

    test("add 1,2 equal to 3", ()=>{
        expect(sum(1,2)).toBe(3)
    })
    
    test("obeject testing", ()=>{
        const data: {[key:string]: number} = {"one":1}
    
        data["two"] = 2
    
        expect(data).toEqual({one:1, two:2})
    })
    
    test("to be null check", ()=>{
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })
    
    test("test numbers with given conditions",()=>{
        const value = 2+2
    
        expect(value). toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4.5)
    })


 })

