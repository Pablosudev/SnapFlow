import React, { useState, useEffect, useRef } from "react";


export const Select = ({images, setImagesFav}) => {
    const [ sortBy, setSortBy ] = useState("height");
    

    const sortImages = ( images, criteria ) => {
        let sortedArray = [...images];
        switch (criteria) {
            case "height":
                sortedArray.sort((a, b) => a.height - b.height);
                break;
            case "width":
                sortedArray.sort((a, b) => a.width - b.width); 
                break;
            case "likes":
                sortedArray.sort((a, b) => a.likes - b.likes); 
                break;
            case "added":
                sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date)); 
                break;
            default:
                break;
        }
        return sortedArray;
    };

    useEffect(() => {
        const sortedImages = sortImages(images, sortBy);
    
        if (JSON.stringify(sortedImages) !== JSON.stringify(images)) {
          setImagesFav(sortedImages); 
        }
      }, [sortBy, images, setImagesFav]); 
    


    const handleChange = (event) => {
        setSortBy(event.target.value); 
    };

    return(
    <select onChange = {handleChange}>
        <option value="height">Height</option>
        <option value="width">Whidt</option>
        <option value="likes">Likes</option>
        <option value="added">Date Added</option>
    </select>
    )
}