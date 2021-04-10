import React, { useState } from 'react'
import Reactdom from 'react-dom'
function App() {
    const purple = "yellow"
    const [bg, setbg] = useState(purple)
    const [name, setname] = useState("Click Me")
    function bgchange() {
        let newbg = "red"
        setbg(newbg)
        setname("Ouch!! 🖕")
    }
    function bgback() {
        setbg(purple)
        setname("Click Me")
    }
    return (
        <>
            <div style={{ backgroundColor: bg, height: "700px" }}>
                <button onMouseEnter={bgchange} onMouseLeave={bgback}>{name}</button>
            </div>
        </>
    )
}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)