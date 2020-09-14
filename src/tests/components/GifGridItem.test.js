import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';


describe('Tests into <GifGridItem />', () => {

    const title = 'The title';
    const url = 'https://localhost/image.jpg';
    
    test('should show <GifGridItem /> alright', () => {
        
        const wrapper = shallow(<GifGridItem  title={ title } url={ url } />);
        expect(wrapper).toMatchSnapshot();

    });

});