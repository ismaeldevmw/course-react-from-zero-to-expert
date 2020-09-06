import { returnArray } from '../../bases/07-destructuring-arrays';

describe('Tests into 07-destructuring', () => {
  
  test('returnArray should return a string and a number', () => {
    
    const [ letters, numbers ] = returnArray();

    // expect( arr ).toEqual( ['ABC', 123]);
    expect( letters ).toBe( 'ABC' );
    expect( typeof letters ).toBe( 'string' );

    expect( numbers ).toBe( 123 );
    expect( typeof numbers ).toBe( 'number' );

  });

});