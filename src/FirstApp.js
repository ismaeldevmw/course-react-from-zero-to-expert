import React from 'react'
// import React, { Fragment } from 'react'

// Functional Components
const FirstApp = () => {

  const greeting = 'Hello world message';

  const object = {
    name: 'Ismael',
    age: 27
  }; 
  
  return (
    <>
      <h1>{ greeting }</h1>
      <pre>{ JSON.stringify(object, null, 3) }</pre>
      <p>My first application</p>
    </>
  );

}

export default FirstApp;
