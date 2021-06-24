import React from 'react'

const Todo = (props) => {

    return (
        <><div className="todo_style">
            <i className="fa fa-times-circle" aria-hidden="true" onClick={() => {
                props.onSelect(props.id);
            }}> </i>
            <li>{props.text}</li>
        </div>

        </>
    )
}
export default Todo;