//Controlled componenet,single source of truth
import React, { useState } from 'react'
import Reactdom from 'react-dom'
const App = () => {
    const [name, setname] = useState("")
    const [fullname, setfullname] = useState()

    const [name1, setname1] = useState("")
    const [fullname1, setfullname1] = useState()
    const updatetext = (event) => {
        setname(event.target.value)
    }
    const updatetext1 = (event) => {
        setname1(event.target.value)
    }

    const show = (event) => {
        event.preventDefault();
        setfullname(name)
        setfullname1(name1)
    }
    return (
        <>
            <form>
                <h1>Hello {fullname} {fullname1}</h1>
                <input type='text' placeholder="Enter your name" onChange={updatetext} value={name} />
                <input type='text' placeholder="Enter your name" onChange={updatetext1} value={name1} />

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