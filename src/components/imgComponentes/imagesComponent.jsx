import "./random.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";




export const ImagesComponent = (images) => {


  const handleFavorite = (image) => {

    const id = image.id
    const photosFav = localStorage.getItem("fav")
    const imagesFav = photosFav? JSON.parse(photosFav) : [];
    
    const isImagesFav = imagesFav.some((img) => img.id === id);
      
      if (isImagesFav) {
        alert ("This image is already in your favorites !");
        return;
      }

    const newImage = {
      id,
      urls: image.urls,
      width: image.width,
      height: image.height,
      date: image.updated_at,
      likes: image.total_likes,};
      

    
    if (photosFav ===null){
      localStorage.setItem("fav",JSON.stringify([newImage]))
      
    }
    else{
      imagesFav.push(newImage)
      localStorage.setItem("fav",JSON.stringify(imagesFav))
    }
    
  }

  const handleLike = (image) => {
    
    const photosLike = localStorage.getItem("like")
    if(photosLike === null){
      localStorage.setItem("like",JSON.stringify([{urls: image.urls}]))
    }
    else{
      const currentLike = JSON.parse(photosLike)
      currentLike.push({urls: image.urls})
      localStorage.setItem("like",JSON.stringify(currentLike))
    }
  }
  
    return <>
    <div className="imagesBody">
        {images.data.map((image, index) => {
         
            return <div key={index}>
              <div className="images">
                    <img src={image.urls.small} className="images__random"/>
                    <div className="buttonsImages">
                    <button onClick={() => handleLike(image)} className="likeButton"><MdFavoriteBorder /></button>
                    <button onClick={() => handleFavorite(image)} className="favButton"><IoIosAddCircleOutline /></button>
                  </div>
              </div>
            </div>
        
        })}
      </div>
        
    </>
      
}
