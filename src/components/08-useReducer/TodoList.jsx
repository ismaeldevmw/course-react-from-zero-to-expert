import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ tasks = [], handleToggle, handleDelete }) => {
    return (
        <ul className="list-group">
            {
                tasks.map( (task, i) => (
                    <TodoListItem
                        key={ task.id }
                        task={ task } 
                        index={ i } 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete } 
                    />
                ))
            }
        </ul>
    )
}
