import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests into GifGrid component', () => {
    
    
    test('should show the component alright', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category="One Punch" />)
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('should show items when load imagen with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhosy/anything/thing.jpg',
            title: 'Anything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category="One Punch" />);

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
});