import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
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
        setImages(gifs);
    }
    
    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }          
            </div>
        </>
    )
}
