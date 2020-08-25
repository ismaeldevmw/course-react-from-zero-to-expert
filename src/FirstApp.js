import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react'

// Functional Components
const FirstApp = ({ greeting }) => {  

  return (
    <>
      <h1>{ greeting }</h1>      
      <p>My first application</p>
    </>
  );

}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default FirstApp;
