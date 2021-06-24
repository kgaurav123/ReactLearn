// video34
import React, { useState } from 'react'
import Reactdom from 'react-dom'
const App = () => {
    const [name, setname] = useState('');
    const [name2, setname2] = useState('');
    const inputevent = (event) => {
        setname(event.target.value);
    }
    const inputevent2 = (event) => {
        setname2(event.target.value);

    }
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const final = (e) => {
        e.preventDefault();
        //change default behaviour of form tag
        setfname(name);
        setlname(name2);
    }
    return (
        <>
            <form onSubmit={final}>
                <h1> Hello {fname} {lname}</h1>
                <input type="text" placeholder="Enter your first name" onChange={inputevent} value={name} />
                <input type="text" placeholder="Enter your last name" onChange={inputevent2} value={name2} />
                <button type="submit">Click Me</button>
            </form>
        </>
    )

}
Reactdom.render(
    <>
        <App />
    </>, document.getElementById('root')
)