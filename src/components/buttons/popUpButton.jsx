import { FaEdit } from "react-icons/fa";

const PopUpButton = ({openPopUp}) => {

   return (
    <button onClick={openPopUp} className="buttonFavs" ><FaEdit/></button>
   )

}

export default PopUpButton;