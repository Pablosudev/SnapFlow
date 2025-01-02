import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DeleteButton = ({ image, handleDelete }) => {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true); 
        handleDelete(image); 
       
        setTimeout(() => setClicked(false), 300);
    };

    
    const buttonClass = clicked ? 'buttonFavs clicked' : 'buttonFavs';

    return (
        <button onClick={handleClick} className={buttonClass}>
            <RiDeleteBin6Line />
        </button>
    );
};

export default DeleteButton;