import Delete from "../../../public/assets/Delete-icon.svg";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../services/apiRequest";
import { getDeleteDestinationUrl } from "../../config/urls";

function DeleteButton({destinationId}) {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    const confirmDelete = window.confirm("¿Quieres eliminar este destino?");
    
    if(confirmDelete){
      try{
        await apiRequest(getDeleteDestinationUrl(destinationId), "DELETE")
        alert('Destino eliminado con éxito');
        navigate("/")
      } catch (error){
        console.error("Error al eliminar el destino:", error);
        alert("Hubo un error al eliminar el destino.");
      }
    }
  };
  return (
    <>
      <img
        src={Delete}
        className="h-[2.5rem] w-[1.917rem] cursor-pointer"
        onClick={handleClick}
      />
    </>
  );
}
export default DeleteButton;
