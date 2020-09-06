import { getHeroById, getHeroByOwner } from '../../bases/08-import-export';
import heroes from '../../data/heroes';


describe('Tests into 08-import-export', () => {
  
  test('should return a heroe by id', () => {
    
    const id = 1;
    const hero = getHeroById( id );

    const heroData = heroes.find( h => h.id === id );

    expect( hero ).toEqual( heroData );

  });

  test('should return undefined if hero don`t exist', () => {
    
    const id = 10;
    const hero = getHeroById( id );

    expect( hero ).toBe( undefined );

  });

  test('should return an array with DC heroes', () => {
    
    const owner = 'DC';

    const heroes = getHeroByOwner( owner );
    const heroesDataByOwner = heroes.filter( hero => hero.owner === owner)

    expect( heroes ).toEqual( heroesDataByOwner );

  });

  test('should return an array with Marvel heroes', () => {    

    const owner = 'Marvel';
    const heroes = getHeroByOwner( owner );
    
    expect( heroes.length ).toBe( 2 );
    
  });

});