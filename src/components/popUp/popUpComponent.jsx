import { useState, useEffect } from "react";
import "./popUp.css";

const PopUp = ({ open, close, saveLabel, imageUrl, currentLabel, imageId }) => {
    const [label, setLabel] = useState(currentLabel || "");
    useEffect(() => {
        
        setLabel(currentLabel || "");
    }, [currentLabel]);

    const handleSave = () => {
        
        saveLabel(label, imageId);
        setLabel(""); 
        close(); 
    };

    const handleLabelChange = (event) => {
        setLabel(event.target.value);
    };

    if (!open) return null;

    return (
        <div className="popUp">
            <h2 className="popUp__title">Personalize your <br /> favorite image with <br /> a description.</h2>
            <img src={imageUrl} alt="Selected favorite" className="popUp__image" />
            <input
                className="popUp__input"
                type="text"
                value={label}
                onChange={handleLabelChange}
                placeholder ="Add a description" 
            />
            <button onClick={handleSave} className="popUp__save">SAVE</button>
            <button onClick={close} className="popUp__close">X</button>
        </div>
    );
};

export default PopUp;