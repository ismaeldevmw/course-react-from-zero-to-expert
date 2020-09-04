const isActive = true;


// condicional extenso
let message1 = '';

if ( isActive ) {
  message1 = 'Activo';
} else {
  message1 = 'Inactivo'
}

// condicional corto usando el operador ternario
const message2 = ( isActive ) ? 'Activo' : 'Inactivo';

// resuelve si la condición es verdadera de lo contratrio devuelve false por default
const message3= isActive && 'Activo';

console.log(message1);
console.log(message2);
console.log(message3);