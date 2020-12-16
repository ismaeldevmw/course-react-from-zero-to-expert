import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests in <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
    
    test('should display correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Ismael',
                quote: 'Hello world'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hello world');
        expect( wrapper.find('footer').text().trim() ).toBe('Ismael');

    });

});