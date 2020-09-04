const characters = ['Goku', 'Vegeta', 'Trunks'];

console.log(characters[0]);

// haciendo desestructuración anteponiendo una coma le decimos que queremos
// obtener el segundo elemento
const [, , character1] = characters;
console.log(character1);


const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const useState = (value) => {
  return [value, () => {
    console.log('Hola mundo')
  }];
}

// sin desestructuración
const arr = useState('Vegitto');
console.log(arr[0]);
arr[1]();

// con desestructuración
const [name, setName] = useState('Gogetta');
console.log(name);
setName();