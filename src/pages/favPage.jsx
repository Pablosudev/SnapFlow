import { RiDownload2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


export const FavPage = () => {

    const photosFav = localStorage.getItem("fav")
    const imagesFav = JSON.parse(photosFav)
    
    

    return <>
    {imagesFav.map((images,index) => {
    return <div key={index} className="images">
        <img src={images.urls.small} className="images__random"/>
        <div className="buttonsImages">
            <button onClick={() => handleDownload(images)} className="buttonFavs"><RiDownload2Line /></button>
            <button onClick={() => handleEdit(images)} className="buttonFavs"><FaEdit /></button>
            <button onClick={() => handleDelete(images)} className="buttonFavs"><RiDeleteBin6Line /></button>
        </div>
    </div>
})}
    </>
}
