import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Tests into <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);
    
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('should show <CounterApp /> alright', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should show default value 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 }/> );
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');
    });

    test('should increment with the button +1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');

    });

    test('should dismiss with the button -1', () => {
        
        wrapper.find('button').first().simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect( counterText ).toBe('9');

    });

});