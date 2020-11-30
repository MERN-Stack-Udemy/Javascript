/** PROMESAS */

import {getHeroById} from './bases/02-importaciones'
/*
const promesa = new Promise( (resolve, reject) => {

  setTimeout( ()=> {
    // TAREA importar getHeroeById y getHeroeByOwner
    const heroID = getHeroById(2);
    console.log(heroID)
    resolve(heroID);
  }, 2000 )
})


promesa.then( (hero)=> {
  // imprimir getHeroeById y getHeroeByOwner respuesta
  // uno a la vez
  console.log(`hero recivido`, hero);
})
*/

const getHeroByIdAsyng = (id) => {

  return new Promise( (resolve, reject) => {

    setTimeout( ()=> {
      // TAREA importar getHeroeById y getHeroeByOwner
      const heroID = getHeroById( id );
      heroID ? 
      resolve( heroID ):
      reject(' No se encontro el Id del heroe');
    }, 2000 )
  });

} 

getHeroByIdAsyng(2)
  .then( console.log )
  .catch( console.warn )