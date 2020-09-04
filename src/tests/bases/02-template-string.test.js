import '@testing-library/jest-dom';
import { getGreetings } from '../../bases/02-template-string';


describe('Tests into 02-template-string.test.js', () => {
  
  test('getGreetings must return Hello Ismael!', () => {
    
    const name = 'Ismael';

    const greeting = getGreetings( name );

    expect( greeting ).toBe('Hello ' + name + '!');

  });

  test('should return Hello Carlos! if there isn`t argument name', () => {
    
    const greeting = getGreetings();

    expect( greeting ).toBe('Hello Carlos!');

  });

});