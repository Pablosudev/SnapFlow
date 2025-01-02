import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import PopUpButton from "../components/buttons/popUpButton";
import PopUp from "../components/popUp/popUpComponent";
import { Select } from "../components/buttons/select";
import DownloadButton from "../components/buttons/downloadButton";
import DeleteButton from "../components/buttons/deleteButton";



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

    const saveLabel = (newLabel, imageId) => {
        const updatedImages = imagesFav.map((img) =>
            img.id === imageId ? { ...img, label: newLabel } : img);
        setImagesFav(updatedImages); 
        localStorage.setItem("fav", JSON.stringify(updatedImages)); 
    };

    const handleDelete = (image) => {
        const deleteImage = imagesFav.filter((img) => img.id !== image.id);
        setImagesFav(deleteImage);
        localStorage.setItem("fav", JSON.stringify(deleteImage));

    }

    
  
    return (
        <div className="imagesBody">
            <Select images={imagesFav} setImagesFav={setImagesFav}/>
            {imagesFav.length > 0 ? (
                imagesFav.map((image, index) => (
                    <div key={index} className="images">
                        <img src={image.urls.small} className="images__random" alt={image.alt_description} />
                        <div className="buttonsImages">
                            <DownloadButton image = {image}/>
                            <PopUpButton openPopUp={() => openPopUp(image)} />
                            <DeleteButton image = {image} handleDelete={handleDelete}/>
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
    )};