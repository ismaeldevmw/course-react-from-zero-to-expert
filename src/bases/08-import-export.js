// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// find - solo devuelve un objeto
export const getHeroById = ( id )  => heroes.find( hero => hero.id === id);

// filter - devuelve m´´as de un objeto
export const getHeroByOwner = ( owner ) => heroes.filter( hero => hero.owner === owner);

