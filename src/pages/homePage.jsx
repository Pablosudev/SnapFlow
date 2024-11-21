import { useEffect, useState } from "react"
import "./Images.css"
import { useDispatch, useSelector } from "react-redux"
import { getImagesData, getImagesStatus } from "../features/images/imagesSlice"
import { imagesThunk } from "../features/images/imagesThunk"





export const HomePage = () => {

   const [data,setData] = useState([])
   const dispatch = useDispatch()
   const [isLoading,setIsLoading] = useState(true)

   const imagesData = useSelector(getImagesData)
   const imagesStatus = useSelector(getImagesStatus)

    useEffect(() => {

         if(imagesStatus === "idle" && props.type === "images"){
            dispatch(imagesThunk)
         }
         else if (imagesStatus === "fulfilled" && props.type === "images"){
            setData(imagesData)
            setIsLoading(false)
         }
         else if (imagesStatus === "rejected" && props.type === "images"){
            setIsLoading(false)
            alert ("Error")
         }


    },[imagesData,imagesStatus,dispatch,props])

   
       
    return <>
      
    </>
}