import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Tests on <HooksApp />', () => {
    
    test('should display correctly', () => {
        const wrapper = shallow( <HooksApp /> );
        expect( wrapper ).toMatchSnapshot();
    })

});