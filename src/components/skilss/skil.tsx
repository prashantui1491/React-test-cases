import React, {useState, useEffect} from 'react'
import { Skillprops } from "./skil.type";


const Skills = (props: Skillprops) => {

    const { skills } = props

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1000);
    },[])

    const handleButtonClick = () => {
        setIsLoggedIn(true)
    }

    console.log(isLoggedIn, "isLoggedIn")

    return (
        <>
            <ul>
                {
                    skills.map((skill) => {
                        return (
                            <li key={skill}>{skill}</li>
                        )
                    })
                }
            </ul>

            {
                isLoggedIn ? <button>Start Learning</button>
                :

                <button onClick = {handleButtonClick}>Log In</button>
            }
        </>
    )

}

export default Skills