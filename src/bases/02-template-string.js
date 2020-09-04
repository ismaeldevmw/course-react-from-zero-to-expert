const name = 'Ismael';
const lastName = 'Lopez';

const fullName = `${name} ${lastName}`;

// console.log(fullName);

export function getGreetings(name = 'Carlos') {
  return 'Hello ' + name + '!';
}

// console.log(`The text is: ${getGreetings('Ismael')}`);