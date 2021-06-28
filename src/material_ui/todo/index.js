import React, { useState } from 'react'
import Reactdom from 'react-dom'
import Button from '@material-ui/core/Button';
import '../../reacthooks/todo/index.cs'
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo.jsx'
const Todolist = () => {
    const [item, setitem] = useState('');
    const [newitem, setnewitem] = useState([]);
    const itemEvent = (e) => {
        setitem(e.target.value);
    }
    const listitems = () => {
        setnewitem((prev) => {
            return [...prev, item];
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>Todo List</h1>
                    <input style={{ "height": "50px" }} value={item} type="text" placeholder="Add an item" onChange={itemEvent} />
                    <Button onClick={listitems}>
                        <AddIcon />
                    </Button>
                    <ol>

                        {newitem.map((val, index) => {
                            return <Todo key={index} text={val} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};
Reactdom.render(
    <>
        <Todolist />
    </>, document.getElementById('root')
)