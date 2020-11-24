import React, { useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { quote } = !!data && data[0];

    const paragraphRef = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize( paragraphRef.current.getBoundingClientRect() );
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ paragraphRef }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                Next quote
            </button>


        </div>
    )
}
