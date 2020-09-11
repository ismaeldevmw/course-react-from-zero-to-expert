import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card__body">
                <img src={ url } alt={ title} />
                <p>{ title }</p>
            </div>
        </div>
    )
}
