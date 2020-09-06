const characters = ['Goku', 'Vegeta', 'Trunks'];


// haciendo desestructuración anteponiendo una coma le decimos que queremos
// obtener el segundo elemento
const [, , character1] = characters;


export const returnArray = () => {
  return ['ABC', 123];
}

// const [letters, numbers] = returnArray();

const useState = (value) => {
  return [value, () => {
    // console.log('Hola mundo')
  }];
}

// sin desestructuración
const arr = useState('Vegitto');
arr[1]();

// con desestructuración
const [name, setName] = useState('Gogetta');
setName();