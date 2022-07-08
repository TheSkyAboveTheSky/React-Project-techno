import React from "react"
import { useState } from "react";

const Homepage = () => {
    // const trigger = () => {
    //     alert("Hello World")
    // }
    const text = useState("Hello world")
    return(
        <div>
            {text}
        </div>
    )
}


export default Homepage;