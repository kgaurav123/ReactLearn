import React, { useState } from 'react';
import Reactdom from 'react-dom';
import './index.css';
import Todo from "./Todo";
const App = () => {
    const [lname, setlname] = useState();
    const [items, setitems] = useState([]);
    const inputevent = (event) => {

        setlname(event.target.value);
    }
    const deleteitems = (id) => {
        console.log(id);
        setitems((olditems) => {
            return olditems.filter((arrele, index) => {
                return index !== id;
            });
        });
    }
    const final = () => {

        setitems((olditems) => {
            return [...olditems, lname];
        })
        setlname('');

    }
    return (
        <div className="main_div">

            <div className="center_div">
                <h1>Todo List</h1>
                <input type="text" onChange={inputevent} placeholder="Add a item" />
                <button onClick={final}>+</button>
                <ol>

                    {items.map((ele, index) => {
                        return <Todo text={ele} key={index} id={index} onSelect={deleteitems} />;
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