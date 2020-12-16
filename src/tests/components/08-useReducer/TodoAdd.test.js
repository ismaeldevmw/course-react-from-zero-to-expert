import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Tests in <TodoAdd />', () => {

    const handleAddTask = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTask={ handleAddTask }
        />
    );

    test('should display correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('shouldn`t call handleAddTodo ', () => {

        // const  value = 'Aprender React';
        // wrapper.find('input').simulate('change', {
        //     target: {
        //         value,
        //         name: 'description'
        //     }
        // });
        
        // const formSubmit = wrapper.find('form').prop('onSubmit');
        // formSubmit({ preventDefault(){} });

        // expect( handleAddTask ).toHaveBeenCalledTimes(1);
        // expect( handleAddTask ).toHaveBeenCalledWith( expect.any(Object) );
        // expect( handleAddTask ).toHaveBeenCalledWith({
        //     id: expect.any(Number),
        //     desc: value,
        //     done: false
        // });

        // expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
});