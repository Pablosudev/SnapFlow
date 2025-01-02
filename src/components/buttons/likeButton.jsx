import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

const LikeButton = ({ image, handleLike }) => {
    return (
        <button onClick={() => handleLike(image)} className="likeButton">
            <MdFavoriteBorder />
        </button>
    );
};

export default LikeButton;