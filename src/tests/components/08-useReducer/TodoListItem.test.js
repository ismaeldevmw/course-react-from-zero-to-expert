import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTasks } from "../../fixtures/demoTasks";

describe('Tests in <TodoListItem />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem 
            task={ demoTasks[0] }
            index={ 0 }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    );
    
    test('should display correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should call the handleDelete function', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTasks[0].id );

    });

    test('should call the handleToggle function', () => {
        
        wrapper.find('span').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTasks[0].id );

    });

    test('should show the text correctly', () => {
        
        const p = wrapper.find('span');
        expect( p.text().trim() ).toBe(`1. ${ demoTasks[0].description }`)

    });

    test('should have the complete class if a task is done', () => {
        
        const task = demoTasks[0];
        task.done = true;
        
        const wrapper = shallow(
            <TodoListItem 
                task={ demoTasks[0] }
                index={ 0 }
            />
        );

        expect( wrapper.find('span').hasClass('complete') ).toBe(true);

    });

});