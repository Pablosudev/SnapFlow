import { RiDownload2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./favorites.css"
import { useState } from "react";
import PopUpButton from "../components/buttons/popUpButton";
import PopUp from "../components/popUp/popUpComponent";


export const FavPage = () => {

    const photosFav = localStorage.getItem("fav")
    const imagesFav = JSON.parse(photosFav)

    const[popUp, setPopUp] = useState(false);
    const openPopUp = () => {
        setPopUp(true)
    }
    const closePopUp = () => {
        setPopUp(false)
    }
    
   
const handleDelete = (image) => {
    
    const photosFav = localStorage.getItem("fav");
    const imagesFav = photosFav ? JSON.parse(photosFav) : [];
    const updatedImages = imagesFav.filter((img) => img.id !== image.id);
    localStorage.setItem("fav", JSON.stringify(updatedImages))
    window.location.reload(); 
  };

  
    

    return <>

    {imagesFav.map((images,index) => {
    return <div key={index} className="images">
        <img src={images.urls.small} className="images__random"/>
        <div className="buttonsImages">
            <button onClick={() => handleDownload(images)} className="buttonFavs"><RiDownload2Line /></button>
            <PopUpButton openPopUp={openPopUp}/>
            <button onClick={() => handleDelete(images)} className="buttonFavs"><RiDeleteBin6Line /></button>
        </div>
        
    </div>
})}
    <PopUp open = {popUp} close = {closePopUp}/>
    </>
}
