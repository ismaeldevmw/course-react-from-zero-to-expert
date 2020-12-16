import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTasks } from '../../fixtures/demoTasks';


describe('Tests in <TodoList />', () => {
    
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    
    const wrapper = shallow(
        <TodoList
            tasks={ demoTasks }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    );

    test('should display correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have two <TodoListItem />', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTasks.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );

    });


});