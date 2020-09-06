import { getHeroById } from './08-import-export';

export const getHeroByIdPromise =  (id) => {

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id)    
    
      if(heroe) {
        resolve(heroe)
      } else {
        reject('¡No se pudo encontrar  el heroe!');
      }
      
    }, 1500);
  });
  
}
