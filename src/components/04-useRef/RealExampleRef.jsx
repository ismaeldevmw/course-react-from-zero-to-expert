import React from 'react';
import { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './useref.css';

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-primary"
                onClick={() => {
                    setShow(!show);  
                }}
            >
                Show / Hide
            </button>
        </div>
    )
}
