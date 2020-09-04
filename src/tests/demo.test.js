
describe('Tests into demo.test.js', () => {
  
  test('The strings must be equals ', () => {
  
    // 1. Initialization
    const message = "Hello world!";
    
    // 2. Encouragement
    const message2 = 'Hello world!';
  
    // 3. Watch the behavior
    expect(message).toBe(message2);
  
  });

});
