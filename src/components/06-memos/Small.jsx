import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Again I am here :(');

    return (
        <small>{ value }</small>
    )
})
