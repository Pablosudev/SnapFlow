import { RiDownload2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesFavData, getImagesFavStatus } from "../features/favSlice";
import PopUpButton from "../components/buttons/popUpButton";
import PopUp from "../components/popUp/popUpComponent";
import { searchFavThunk } from "../features/images/favThunk";





export const FavPage = () => {

    const photosFav = localStorage.getItem("fav")
    const imagesFav = photosFav ? JSON.parse(photosFav) : [];
    const[popUp, setPopUp] = useState(false);
    const[selectedImage, setSelectedImage] = useState(null);

    const [data,setData] = useState([])
    const dispatch = useDispatch()
    const [isLoading,setIsLoading] = useState(true)
    const imagesFavData = useSelector(getImagesFavData)
    const imagesFavStatus = useSelector(getImagesFavStatus)

 useEffect(() => {
         if(imagesFavStatus === "idle" ){
            dispatch(searchFavThunk(""))
         }
         else if (imagesFavStatus === "fulfilled"){
            setData(imagesFavData)
            setIsLoading(false)
            
         }
         else if (imagesFavStatus === "rejected"){
            setIsLoading(false)
            alert ("Error")
         }


    },[imagesFavStatus,dispatch])



    const openPopUp = (image) => {
        setPopUp(true)
        setSelectedImage(image);
    };

    const closePopUp = () => {
        setPopUp(false);
        setSelectedImage(null);
    };
    
   
    const handleDelete = (image) => {
        
        const photosFav = localStorage.getItem("fav");
        const imagesFav = photosFav ? JSON.parse(photosFav) : [];
        const updatedImages = imagesFav.filter((img) => img.id !== image.id);
        localStorage.setItem("fav", JSON.stringify(updatedImages))
        window.location.reload(); 
    };

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image.urls.full;
        link.download = `image-${image.id}.jpg`;
        link.click();
    };
    
    



  
   return (
    <div className="imagesBody">
        {imagesFav.map((images, index) => (
                <div key={index} className="images">
                    <img src={images.urls.small} className="images__random" alt={images.alt_description} />
                    <div className="buttonsImages">
                        <button onClick={() => handleDownload(images)} className="buttonFavs">
                            <RiDownload2Line />
                        </button>
                        <PopUpButton openPopUp={() => openPopUp(images)} />
                        <button onClick={() => handleDelete(images)} className="buttonFavs">
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
        )) }
        <PopUp open={popUp} close={closePopUp} />
    </div>
);
};