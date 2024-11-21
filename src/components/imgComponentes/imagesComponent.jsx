



export const ImagesComponent = (props) => {


    return <>
        
        {props.data.map((images,index) =>
            props.type === "images" ? <>
            
            {images.map((images) => <img src={images.urls.small}/>)}
            
            </> : <>
            </>
        )
        
    }
    
    </>

}