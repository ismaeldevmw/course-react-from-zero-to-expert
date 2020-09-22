import React from 'react';
import { shallow } from "enzyme";
const { AddCategory } = require("../../components/AddCategory");

describe('Tests into AddCategory component', () => {
    
    const setCategories = () => {};
    const wrapper =  shallow( <AddCategory setCategories={ setCategories } /> );

    test('should show right now', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should changes input text', () => {
        
        const input = wrapper.find('input');
        const textValue = 'One punch';
        input.simulate('change', { target: { textValue } });

    });

});