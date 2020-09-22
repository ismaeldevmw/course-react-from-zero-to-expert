import React from 'react';
import { shallow } from "enzyme";
const { AddCategory } = require("../../components/AddCategory");

describe('Tests into AddCategory component', () => {
    
    const setCategories = jest.fn();
    let wrapper =  shallow( <AddCategory setCategories={ setCategories } /> );
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper =  shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should show right now', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should changes input text', () => {
        
        const input = wrapper.find('input');
        const textValue = 'One punch';
        input.simulate('change', { target: { textValue } });

    });

    test('shouldn`t post information when submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();

    });

});