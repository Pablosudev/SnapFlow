import "./random.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";




export const ImagesComponent = (images) => {


  const handleFavorite = (image) => {
    const photosFav = localStorage.getItem("fav")
    if (photosFav ===null){
      localStorage.setItem("fav",JSON.stringify([{urls: image.urls}]))
      
    }
    else{
      const currentFav = JSON.parse(photosFav)
      currentFav.push({urls: image.urls})
      localStorage.setItem("fav",JSON.stringify(currentFav))
    }
  }

  const  handleLike = (image) => {
    const photosLike = localStorage.getItem("like")
    if (photosLike === null){
      localStorage.setItem("like",JSON.stringify({urls: image.urls}))
    }
    else{
      const currentLike = JSON.parse(photosLike)
      currentLike.push({urls: image.urls})
      localStorage.setItem("like",JSON.stringify(currentLike))
    }
  }
  console.log(images)
    return <>
    <>
        {images.data.map((image, index) => {
            return <div key={index} className="images">
                    <img src={image.urls.small} className="images__random"/>
                    <div className="buttonsImages">
                    <button onClick={() => handleLike(image)} className="likeButton"><MdFavoriteBorder /></button>
                    <button onClick={() => handleFavorite(image)} className="favButton"><IoIosAddCircleOutline /></button>
                  </div>
              </div>
        })}
        </>
    </>
      
}