import { ImagesComponent } from "../components/imgComponentes/imagesComponent"

export const FavPage = () => {

    const photosFav = localStorage.getItem("fav")
    const data = JSON.parse(photosFav)
    console.log(data)
    return <>
    <ImagesComponent data={data} type="images"/>
    </>
}