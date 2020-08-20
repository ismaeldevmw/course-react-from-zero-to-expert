const person = {
  name: 'Manuel',
  lastname: 'Stark',
  age: 50,
  adress: {
    city: 'New York',
    zip: 76542,
    lat: 12.21221,
    lng: 45.23232,
  }
};

console.table(person);
console.log(person);

// const person2 = person; // Forma incorrecta NO hacerlo

// para reasignar correctamente las propiedades a un nuevo objeto
// hacemos uso del spread operator ...
const person2 = {
  ...person
};
person2.name = 'Peter';

// de está forma cambiamos la propiedades correctamente sin alterar la
// primer variable
console.log(person);
console.log(person2);