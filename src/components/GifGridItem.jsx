import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, url }) => {    

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card__body">
                <img src={ url } alt={ title} />
                <p>{ title }</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
