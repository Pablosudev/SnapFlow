import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";;

const FavoriteButton = ({ image, handleFavorite }) => {
    return (
        <button onClick={() => handleFavorite(image)} className="buttonFavs">
            <IoIosAddCircleOutline />
        </button>
    );
};

export default FavoriteButton;