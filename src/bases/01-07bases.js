/*const arr = [1,2,3,4];
const arr2 = [...arr];
arr2.push(5); 
arr2.push(6); 

console.log(arr);
console.log(arr2);
*/

/**
 * Transformar a arrow function
 * return a implicid object
 * test
 */
/*function getUsuarioActivo ( name ) {
  return {
    uid: "ABC758",
    userName: name,
  }
}

const getUsuarioActivo2 = name => ({
  uid: "12345",
  userName: name
})

console.table(getUsuarioActivo("mery"))
console.table(getUsuarioActivo2("diana"))
*/

/**
 * Desestructuracion de objetos literales
const persona = {
  name: "Tony",
  age: 45,
  key: 'Iron Man'
}

const useContex = ({ key, name, age, range = 'cap'}) => {
  return {
    nombreClave: key,
    anios: age,
    latlng: {
      lat: 14.552569,
      lng: -24.369856
    }
  }
};

const {nombreClave, anios, latlng:{lat ,lng} } = useContex( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
 */

/**
 * Desestructuracion de arreglos

 const personajes = ['Guku', 'Vegeta', 'Trunks']

 const [ p2 ] = personajes;
 
 console.log( p2 );
const values = [ "ABD", 3475 ];
const [ letras, numeros ] = values
console.log( letras, numeros );
*/

/**
 * Demo hooks react
 */

const useNombre = (nombre) => {
  return [ nombre, () => { console.log('Hola soy vegeta') }]
}

const [nombre, setNombre ] = useNombre('Goku');

console.log( nombre );
setNombre();
