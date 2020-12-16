import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTasks } from "../../fixtures/demoTasks";


describe('Tests in todoReducer', () => {
    
    test('should return a state by default', () => {
        
        const state = todoReducer( demoTasks, {} );
        expect( state ).toEqual( demoTasks );

    });

    test('should add a task', () => {

        const newTask = {
            id: 3,
            description: 'Learn Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTask
        }
        
        const state = todoReducer( demoTasks, action );
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTasks, newTask] );

    });

    test('should delete a task', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTasks, action);
        expect( state.length ).toBe(1);
        expect( state ).toEqual( [demoTasks[1]] );
    });

    test('should toggle the task', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTasks, action);
        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual( demoTasks[1] );
    });

});