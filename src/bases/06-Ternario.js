/**
 * Operador Ternario
 */

const activo = true;
//let mensaje = '';

/*if( !activo ){
  mensaje = 'activo';
}else {
  mensaje = 'Inactivo';
}*/

//mensaje = ( !activo ) ? 'Activo' : null;
let mensaje = !activo && 'Activo'
console.log( mensaje );