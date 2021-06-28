import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
    const [del, setdel] = useState(false);
    const cutIt = () => {
        setdel(true);
    }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}><DeleteIcon style={{ color: 'red', fontSize: 30 }} /></span>
                <li style={{ textDecoration: del ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
}

export default Todo;
