



export const ImagesComponent = (props) => {


    return <>
        
        {props.data.map((images,index) =>
            props.type === "images" ? <>
            <p>{images.title}</p>
            <img src={images.urls}/>
            </> : <>
            </>
        )
    }
    
    </>

}