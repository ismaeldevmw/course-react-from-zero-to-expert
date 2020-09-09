import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react'

// Functional Components
const FirstApp = ({ greeting, subtitle }) => {  

    return (
    <>
        <h1>{ greeting }</h1>      
        <p> { subtitle } </p>
    </>
    );

}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Im a subtitle'
}

export default FirstApp;
