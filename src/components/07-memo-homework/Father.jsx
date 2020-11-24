import React, { useState, useCallback } from 'react';
import { Son } from './Son';
import './memo.css';

export const Father = () => {

    const numbers = [2,4,6,8,10];
    const [value, setValor] = useState(0);

    // const increment = ( num ) => {
    //     setValor( valor + num )
    // }

    const increment = useCallback( (num) => {
        setValor(v => v + num)
    }, [ setValor ])


    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numbers.map( n => (
                    <Son 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
        </div>
    )
}
