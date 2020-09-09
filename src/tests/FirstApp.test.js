import React from 'react'
import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';


describe('Tests into <FirstApp />', () => {

  test('should show the message "Hello! I am Goku"', () => {
    
    const greeting = 'Hello! I am Goku';

    const { getByText } =  render( <FirstApp greeting={ greeting } /> );

    expect( getByText(greeting) ).toBeInTheDocument();
    
  });

});