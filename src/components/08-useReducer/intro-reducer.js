const initialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    
    if ( action?.type === 'add' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'But eggs',
    done: false
}


const addElementAction = {
    type: 'add',
    payload: newTodo
}


todos = todoReducer( todos, addElementAction );

console.log(todos);