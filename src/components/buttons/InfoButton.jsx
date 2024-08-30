import Info from "../../../public/assets/Info-icon.svg"
import { useNavigate } from 'react-router-dom';


function InfoButton({destinationId}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/location/${destinationId}`);
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