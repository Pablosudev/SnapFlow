import "./random.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";




export const ImagesComponent = (props) => {


  const handleFavorite = (img) => {
    const photosFav = localStorage.getItem("fav")
    if (photosFav ===null){
      localStorage.setItem("fav",JSON.stringify([{urls: img.urls}]))
    }
    else{
      const currentFav = JSON.parse(photosFav)
      currentFav.push({urls: img.urls})
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

  

    return (
      <>
        {props.data.map((images, index) => (
          props.type === "images" ? (
            <div key={index}>
              {images.map((image, imageIndex) => (
                <div key={imageIndex} className="images">
                    <div className="buttonsImages">
                    <button onClick={() => handleLike(imageIndex)} className="likeButton"><MdFavoriteBorder /></button>
                    <button onClick={() => handleFavorite(imageIndex)} className="favButton"><IoIosAddCircleOutline /></button>
                    </div>
                  <img src={image.urls.small} className="images__random"/>
                  
                </div>
              ))}
            </div>
            ) : (
            <></> 
            )
        ))}
      </>
    );
  };
    
