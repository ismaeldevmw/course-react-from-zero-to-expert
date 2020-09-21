import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';


describe('Tests into <GifGridItem />', () => {

    const title = 'The title';
    const url = 'https://localhost/image.jpg';
    const wrapper = shallow(<GifGridItem  title={ title } url={ url } />);
    
    test('should show <GifGridItem /> alright', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should have a paragraph with the title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('should have an image equals to url and alt props', () => {
        
        const img = wrapper.find( 'img' );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('should have a class animate__fadeIn', () => {
        
        const div = wrapper.find('div.card');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    });

});