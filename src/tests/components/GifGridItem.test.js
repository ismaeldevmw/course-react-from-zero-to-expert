import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';


describe('Tests into <GifGridItem />', () => {
    
    test('should show <GifGridItem /> alright', () => {
        
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();

    });

});