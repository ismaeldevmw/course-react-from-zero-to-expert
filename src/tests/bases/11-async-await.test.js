const { getImage } = require("../../bases/11-async-await");


describe('Tests with async-await and fetch', () => {
  
  test('should return an valid url', async () => {
    
    const url = await getImage();
    expect( url.includes('https://') ).toBe( true );

  });

});