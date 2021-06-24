import React, { useState } from 'react'
import Reactdom from 'react-dom'
import './index.css'
var l = []
const App = () => {
    const [inputlist, setinputlist] = useState("Buy a apple");
    const inputevent = (event) => {
        setinputlist(event.target.value);

    }
    const [finalinput, setfinalinput] = useState();

    const final = () => {
        l.push(inputlist);

        setfinalinput(inputlist);

    }
    return (
        <div className="main_div">

            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" onChange={inputevent} placeholder="Add a item" />
                <button onClick={final}>+</button>
                <ol>
                    {l.map((ele) => {
                        return <li>{ele}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}
Reactdom.render(
    <>
        <App />
    </>,
    document.getElementById('root')
)