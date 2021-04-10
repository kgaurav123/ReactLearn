//Controlled componenet,single source of truth
import React, { useState } from 'react'
import Reactdom from 'react-dom'
const App = () => {
    const [name, setname] = useState("")
    const updatetext = (event) => {
        setname(event.target.value)
    }
    const [fullname, setfullname] = useState()
    const show = (event) => {
        event.preventDefault();
        setfullname(name)
    }
    return (
        <>
            <form>
                <h1>Hello {fullname}</h1>
                <input type='text' placeholder="Enter your name" onChange={updatetext} value={name} />
                <button type='submit' onClick={show}>Click Me 👍</button>
            </form>
        </>
    )
}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)