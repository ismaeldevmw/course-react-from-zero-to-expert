import React from 'react'

export const TodoListItem = ({ task, index, handleToggle, handleDelete }) => {
    return (
        <li
            key={ task.id }
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span
                className={ `${ task.done && 'complete' }` } 
                onClick={ () => handleToggle( task.id ) } 
            >
                { index + 1}. { task.description }
            </span>
            <button onClick={ () => handleDelete(task.id) } className="btn btn-sm btn-danger">Delete</button>
        </li>
    )
}
