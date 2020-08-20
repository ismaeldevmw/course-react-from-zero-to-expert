// No se recomienda crar funciopnes de está manera ya que solo apunda a una
// dirección en memoria y ocurren errores
// function greeting(name) {
//   return `Hello ${name}`;
// }

// esté tipo de errores ocurren cuando declaramos la función como arriba
// greeting = 30;
// console.log(greeting);

const greeting = function (name) {
  return `Hello ${name}`;
}

const greeting2 = name => {
  return `Hello2 ${name}`;
}

const greeting3 = name => `Hello3 ${name}`;

console.log(greeting('Goku'));
console.log(greeting2('Vegeta'));
console.log(greeting3('Johan'));

// Función con un return implicíto
const getUser = () => ({
  uid: 'ABC123',
  userName: 'El_Papi123',
})

console.log(getUser);