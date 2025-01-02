import React, { useState } from 'react';
import { RiDownload2Line } from 'react-icons/ri';

const DownloadButton = ({ image }) => {
    
    const [clicked, setClicked] = useState(false);

    const handleDownload = () => {
        if (!image || !image.urls || !image.urls.full) {
            alert("Error: URL de la imagen no válida.");
            return;
        }

        try {
            const link = document.createElement('a');
            link.href = image.urls.full;
            link.download = `image-${image.id}.jpg`;
            link.click();
            setClicked(true);
            setTimeout(() => setClicked(false), 300);
        } catch (error) {
            console.error("Error al intentar descargar la imagen:", error);
            alert("Hubo un problema al intentar descargar la imagen.");
        }
    };

    
    const buttonClass = clicked ? 'buttonFavs clicked' : 'buttonFavs';

    return (
        <button onClick={handleDownload} className={buttonClass}>
            <RiDownload2Line />
        </button>
    );
};

export default DownloadButton;