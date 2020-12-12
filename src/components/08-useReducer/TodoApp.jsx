import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';

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

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;
        
        const newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTask
        }

        dispatch( action );
        reset();
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
                    <h4>Add task</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit } className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <input 
                                type="text"
                                name="description"
                                placeholder="Add a task to do..."
                                autoComplete="off"
                                className="form-control form-control-sm"
                                value={ description }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <button
                            type="submit" 
                            className="btn btn-sm btn-outline-primary mb-2"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
