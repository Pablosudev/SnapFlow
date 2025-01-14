import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImagesData, getImagesStatus } from "../features/images/imagesSlice"
import { imagesThunk } from "../features/images/imagesThunk"
import { ImagesComponent } from "../components/imgComponentes/imagesComponent"


export const HomePage = () => {

   const [data,setData] = useState([])
   const dispatch = useDispatch()
   const [isLoading,setIsLoading] = useState(true)
   

   const imagesData = useSelector(getImagesData)
   const imagesStatus = useSelector(getImagesStatus)
   
   

    useEffect(() => {
         if(imagesStatus === "idle" ){
            dispatch(imagesThunk())
         }
         else if (imagesStatus === "fulfilled"){
            setData(imagesData)
            setIsLoading(false)
            
         }
         else if (imagesStatus === "rejected"){
            setIsLoading(false)
            alert ("Error")
         }
      },[imagesData,imagesStatus,dispatch])

    return <>
    <div >
    <ImagesComponent data={data} type="images"/>
    </div>
    </>
}