// video34
import React, { useState } from 'react'
import Reactdom from 'react-dom'
const App = () => {
    const [name, setname] = useState('');
    const inputevent = (event) => {
        setname(event.target.value);
    }
    const [fname, setfname] = useState('');
    const final = () => {
        setfname(name)

    }
    return (
        <>
            <h1> Hello {fname}</h1>
            <input type="text" placeholder="Enter your name" onChange={inputevent} value={name} />
            <button onClick={final}>Click Me</button>
        </>
    )

}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)