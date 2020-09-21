import React from 'react';
import { shallow } from "enzyme";
const { AddCategory } = require("../../components/AddCategory");

describe('Tests into AddCategory component', () => {
    
    const setCategories = () => {};

    test('should show right now', () => {
        
        const wrapper =  shallow( <AddCategory setCategories={ setCategories } /> );
        expect( wrapper ).toMatchSnapshot();

    });

});