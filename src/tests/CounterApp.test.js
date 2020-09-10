import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Tests into <CounterApp />', () => {
    
    test('should show <CounterApp /> alright', () => {
        
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should show default value 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 }/> );
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');
    });

});