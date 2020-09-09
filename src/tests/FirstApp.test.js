import React from 'react'
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import FirstApp from '../FirstApp';


describe('Tests into <FirstApp />', () => {

  // test('should show the message "Hello! I am Goku"', () => {  
  //   const greeting = 'Hello! I am Goku';
  //   const { getByText } =  render( <FirstApp greeting={ greeting } /> );
  //   expect( getByText(greeting) ).toBeInTheDocument();
  // });

    test('should show <FirstApp /> properly', () => {

        const greeting = 'Hello! I am Goku';
        const wrapper = shallow( <FirstApp greeting={ greeting } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the subtitle sended by props', () => {
        
        const greeting = 'Hello! I am Goku';
        const subTitle = 'Hello! I am Goku';

        const wrapper = shallow( 
            <FirstApp 
                greeting={ greeting }
                subtitle={ subTitle }
            /> 
        );

        const paragraphText = wrapper.find('p').text();

        expect( paragraphText ).toBe( subTitle );

    });

});