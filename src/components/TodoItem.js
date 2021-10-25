import React from "react"

function TodoItem(props) {
    return (
        <li key={props.todo.id}>
            <input type="checkbox" checked={props.todo.completed}/>
            {props.todo.title}
        </li>
    )
}

export default TodoItem;