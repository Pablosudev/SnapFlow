import { useState } from "react";
import "./popUp.css"


const PopUp = ({ open, close, saveLabel }) => {

    const handleSave = () => {
        saveLabel(label);
        setLabel("")
        
    }

    
if (!open) return null;

const [label,setLabel]= useState("");

const handleLabelChange = (event) => {
    setLabel(event.target.value);
}


return (
    <div className="popUp">
        <h2 className="popUp_title">Personalize your <br /> favorite image whit <br /> a description.</h2>
        <input type="text" value = {label} onChange = {handleLabelChange} />
        <button onClick={handleSave}>SAVE</button>
        <button onClick={close} className="popUp_close">X</button>
    </div>
   
)
}

export default PopUp;