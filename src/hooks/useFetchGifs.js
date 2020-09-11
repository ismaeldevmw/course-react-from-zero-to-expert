import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // It allow us to run once when the page is rendered for the first time
    useEffect( () => {
        
        getGifs( category )
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
            
    }, [category]);

    return state; // { data: [], loading: true }
}
