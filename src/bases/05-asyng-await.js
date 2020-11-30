/**
 * Asyng - Await
 */
import { api_key } from './giphy/api_key'

const getImagen = async() => {

  try { // para manejar los errores de asyng-await 
        // se debe hacerlo en un bloque try-cath
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
    const { data } = await resp.json();
    console.log('data', data)
    const { url } = data.images.original;
    showImage( url );
  } catch (error) {
    // manejo de los errores 
    console.error(error)
  }
}
const showImage = (url) => {
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
}
getImagen();