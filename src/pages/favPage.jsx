import { RiDownload2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import PopUpButton from "../components/buttons/popUpButton";
import PopUp from "../components/popUp/popUpComponent";
import { Select } from "../components/buttons/select";




export const FavPage = () => {

    const photosFav = localStorage.getItem("fav");
    const initialImagesFav = photosFav ? JSON.parse(photosFav) : [];
    const [popUp, setPopUp] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagesFav, setImagesFav] = useState(initialImagesFav);

    


    const openPopUp = (image) => {
        setPopUp(true)
        setSelectedImage(image);
    };

    const closePopUp = () => {
        setPopUp(false);
        setSelectedImage(null);
    };
    
    const handleDelete = (image) => {
        const updatedImages = imagesFav.filter((img) => img.id !== image.id);
        setImagesFav(updatedImages); 
        localStorage.setItem("fav", JSON.stringify(updatedImages)); 
    };

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image.urls.full;
        link.download = `image-${image.id}.jpg`;
        link.click();
    };
    
    const saveLabel = (newLabel, imageId) => {
        const updatedImages = imagesFav.map((img) =>
            img.id === imageId ? { ...img, label: newLabel } : img);
        setImagesFav(updatedImages); 
        localStorage.setItem("fav", JSON.stringify(updatedImages)); 
    };

    
  
    return (
        <div className="imagesBody">
            <Select images={imagesFav} setImagesFav={setImagesFav}/>
            {imagesFav.length > 0 ? (
                imagesFav.map((image, index) => (
                    <div key={index} className="images">
                        <img src={image.urls.small} className="images__random" alt={image.alt_description} />
                        <div className="buttonsImages">
                            <button onClick={() => handleDownload(image)} className="buttonFavs">
                                <RiDownload2Line />
                            </button>
                            <PopUpButton openPopUp={() => openPopUp(image)} />
                            <button onClick={() => handleDelete(image)} className="buttonFavs">
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No images in favorites.</p> 
            )}
            <PopUp
                open={popUp} close={closePopUp} saveLabel={saveLabel} imageUrl={selectedImage ? selectedImage.urls.small : ""} 
                currentLabel={selectedImage ? selectedImage.label : ""}
                imageId={selectedImage ? selectedImage.id : null}
            />
            <h2 className="favText">Add more images to your favorites list !</h2>
        </div>
    );
};