import React, { useState } from 'react';
import { useMemo } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
import './memorize.css';

export const MemoHook = () => {

    const { counter, increment} = useCounter(500);
    const [show, setShow] = useState(true);

    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{ counter }</small> </h3>
            <hr/>

            <p>{ heavyProcessMemo }</p>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button 
                className="btn btn-outline-primary"
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show / Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
