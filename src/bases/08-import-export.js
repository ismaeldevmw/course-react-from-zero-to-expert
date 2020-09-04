// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';
// console.log( owners );

// find - solo devuelve un objeto
export const getHeroById = ( id )  => heroes.find( heroe => heroe.id === id);
// console.log( getHeroById(1) );

// filter - devuelve m´´as de un objeto
export const getHeroByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner);
// console.log( getHeroByOwner('DC'));
