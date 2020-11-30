/**
 * Importaciones y tipos de importaciones
*/

import heroes,{ actors} from '../data/Heroes'

//console.log(actors);

////console.log( heroes );
const getHeroById = (id) => {
  return heroes.find( (hero) => hero.id === id);
}

//console.log( getHeroeById(2) )

const getHerosbyOwner = ( owner ) => {
  return heroes.filter( ( hero ) => hero.owner === owner);
}

const getActors = (actor) => {
  return actors.find((act) => act == actor);
}
//console.log(getHerosbyOwner('Marvel'))

export {
  getHeroById,
  getHerosbyOwner,
  getActors
}

