import {api_key} from './giphy/api_key'
//console.log(api_key)
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)


peticion
  .then( resp => resp.json())
  .then( ({ data }) => {
    const {url} = data.images.original;
    console.log( url)

    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
  })
  .catch( console.warn )