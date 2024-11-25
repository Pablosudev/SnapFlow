import "./random.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";



export const ImagesComponent = (props) => {
    return (
      <>
        {props.data.map((imageArray, index) => (
          props.type === "images" ? (
            <div key={index}>
              {imageArray.map((image, imageIndex) => (
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
    
