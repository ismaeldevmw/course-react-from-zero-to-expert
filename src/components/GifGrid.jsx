import React, { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);
    
    // It allow us to run once when the page is rendered for the first time
    useEffect( () => {
        getGifs();
    }, []);
    
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=ghrznHO2Cn0zURgsTquNCh2s4oazS19I';
        const response = await fetch( url );
        const { data } = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }
    
    return (
        <div>
            <h3> { category } </h3>
            <h3> { count } </h3>
            <button onClick={() => setCount( count + 1) }>+</button>
        </div>
    )
}
