// Desestructuración | Asignación desestructurante

const person = {
  name: 'Tony',
  age: 40,
  key: 'Ironman',
};

// Sin desestructuración
// console.log(person.age);
// console.log(person.key);

// con desestructuración
// const {
//   name,
//   age,
//   key
// } = person;

// console.log(name);
// console.log(age);
// console.log(key);

const returnPerson1 = (person) => {
  const {
    name,
    age,
    range = 'Capitán'
  } = person
  console.log(name, age, range);
}


const returnPerson2 = ({
  name,
  age,
  range = 'Capitán'
}) => {
  console.log(name, age, range);
}

returnPerson1(person)
returnPerson2(person)

const useContext = ({
  name,
  age,
  range = 'Capitán',
  key
}) => {
  return {
    keyName: key,
    years: age,
    latlng: {
      lat: 12.12434,
      lng: -15.3412,
    }
  }
}

const {
  keyName,
  years,
  latlng: {
    lat,
    lng
  }
} = useContext(person);

console.log(keyName, years);
console.log(lat, lng);