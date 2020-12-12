import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('tasks')) || []
    // return [{
    //     id: new Date().getTime(),
    //     description: 'Learn React',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [ tasksToDo, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify( tasksToDo ));
    }, [ tasksToDo ])

    const handleDelete = ( taskId ) => {

        const action = {
            type: 'delete',
            payload: taskId
        }

        dispatch( action )
    }

    const handleToggle = ( taskId ) => {

        dispatch({
            type: 'toggle',
            payload: taskId
        });

    }

    const handleAddTask = ( newTask ) =>{

        dispatch({
            type: 'add',
            payload: newTask
        });

    }

    return (
        <div>
            <h1>TodoApp ({ tasksToDo.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        tasks={ tasksToDo } 
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete } 
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTask={ handleAddTask }/>
                </div>
            </div>
        </div>
    )
}
