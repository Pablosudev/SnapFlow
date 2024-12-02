import { ImagesComponent } from "../components/imgComponentes/imagesComponent"

export const FavPage = () => {

    const photosFav = localStorage.getItem("fav")
    const imagesFav = JSON.parse(photosFav)
    console.log(imagesFav)
    return <>
    <ImagesComponent data={data} type="images"/>
    </>
}