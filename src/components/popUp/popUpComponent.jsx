import "./popUp.css"


const PopUp = ({ open, close }) => {

if (!open) return null;

return (
    <div className="popUp">
        <h2 className="popUp_title">Personalize your <br /> favorite image whit <br /> a description.</h2>
        <button>SAVE</button>
        <button onClick={close} className="popUp_close">X</button>
    </div>
   
)
}

export default PopUp;