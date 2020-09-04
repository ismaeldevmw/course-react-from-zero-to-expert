import { getHeroById } from './bases/08-import-export';

// const promise = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     const heroe = getHeroById(2)    
//     resolve(heroe)
//   }, 2000);

// });

// promise.then( (data) => {
//   console.log('Then de la promesa');
//   console.log(data);
// })
// .catch( error => console.log(error) );

const getHeroByIdPromise =  (id) => {

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id)    
    
      if(heroe) {
        resolve(heroe)
      } else {
        reject('No se pudo encontrar  el heroe');
      }
      
    }, 2000);
  });
  
} 

getHeroByIdPromise(20).then( heroe => {
  console.log('Heroe', heroe);
})
.catch( console.warn )

// retorna el primer argumento
getHeroByIdPromise(2)
.then( console.log )
.catch( console.warn )

