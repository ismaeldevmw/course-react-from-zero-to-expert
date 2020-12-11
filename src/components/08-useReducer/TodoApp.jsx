import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('tasks')) || []
    // return [{
    //     id: new Date().getTime(),
    //     description: 'Learn React',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [ taskToDo, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify( taskToDo ));
    }, [ taskToDo ])

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

        dispatch( action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ taskToDo.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            taskToDo.map( (task, i) => (
                                <li
                                    key={ task.id }
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    { i + 1}. { task.description }
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </li>
                            ))
                        }
                    </ul>
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
