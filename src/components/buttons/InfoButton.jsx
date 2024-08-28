import Info from "../../../public/assets/Info-icon.svg"
import { useNavigate } from 'react-router-dom';
function InfoButton() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/location'); // Cambiar la ruta 
    };
    return(
        <>
        <img src={Info}
          className="h[3.125rem] w[3.125rem] cursor-pointer" 
            alt="Info" 
            onClick={handleClick}/>
        </>
    )
    
}
export default InfoButton;