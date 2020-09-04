const name = 'Ismael';
const lastName = 'Lopez';

const fullName = `${name} ${lastName}`;

console.log(fullName);

function getGreetings(name) {
  return 'Hello ' + name;
}

console.log(`The text is: ${getGreetings('Ismael')}`);