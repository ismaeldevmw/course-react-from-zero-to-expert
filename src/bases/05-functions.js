
const greeting2 = name => {
  return `Hello, ${name}`;
}

const greeting3 = (name) => `Hello, ${name}`;
const greeting4 = () => `Hello world`;

export const getUser = () => ({
  uid: 'ABC123',
  userName: 'El_Papi123',
});

export const getActiveUser = (name) => ({
    uid: 'ABC345',
    userName: name
});
