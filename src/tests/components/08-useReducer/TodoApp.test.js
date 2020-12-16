import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTasks } from '../../fixtures/demoTasks';
import { act } from '@testing-library/react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Tests in <TodoApp />', () => {
    const wrapper = shallow( <TodoApp /> );

    Storage.prototype.setItem = jest.fn( () => {} )

    test('should display correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should add a TASK', () => {
        
        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTask')( demoTasks[0] );
            wrapper.find('TodoAdd').prop('handleAddTask')( demoTasks[1] );
        });
        
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });

    test('should delete a TASK', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTask')( demoTasks[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTasks[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');

    });
});