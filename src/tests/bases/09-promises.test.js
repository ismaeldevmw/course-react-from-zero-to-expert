const { getHeroByIdPromise } = require("../../bases/09-promises");
const { default: heroes } = require("../../data/heroes");

describe('Tests with Promises', () => {
  
  test('getHeroByIdPromise should return a hero async', ( done ) => {
    
    const id = 1;

    getHeroByIdPromise( id )
      .then( hero => {

        expect( hero ).toBe( heroes[0] );
        done();
        
      });

  });

  test('should get an error if hero don`t exists', ( done ) => {
    
    const id = 10;

    getHeroByIdPromise( id)
    .catch( error  => {

      expect( error ).toBe('¡No se pudo encontrar  el heroe!');
      done();

    });

  });

});