import { useEffect } from "react"



export const randomImage = () => {

    const [imagesRandom, setImagesRandom] =useState()
    useEffect(() =>{
        localStorage.getItem("randomImages")
        JSON.parse(localStorage.getItem("randomImages"))
        setImagesRandom(localStorage.getItem("randomImage"))
    },[])

    return <>
    
    </>
}