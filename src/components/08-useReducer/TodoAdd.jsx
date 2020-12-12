import React, { useRef } from 'react'

export const TodoAdd = ({ handleAddTask }) => {

    const inputRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputRef.current.value.trim().length <= 1) return;

        const newTask = {
            id: new Date().getTime(),
            description: inputRef.current.value,
            done: false
        };

        handleAddTask( newTask );
        inputRef.current.value = '';

    }

    return (
        <>
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
                        ref={ inputRef }
                    />
                </div>
                <button
                    type="submit" 
                    className="btn btn-sm btn-outline-primary mb-2"
                >
                    Add
                </button>
            </form>
        </>
    )
}
