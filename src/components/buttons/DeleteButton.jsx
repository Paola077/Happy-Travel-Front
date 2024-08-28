import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Delete from "../../../public/assets/Delete-icon.svg";
import ConfirmModal from '../modal/ConfirmModal'; 
import { apiRequest } from "../../services/apiRequest";
import { getDeleteDestinationUrl } from "../../config/urls";

function DeleteButton({ destinationId }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setModalOpen(true); 
  };

  const handleConfirm = async () => {
    setModalOpen(false);

    try {
      await apiRequest(getDeleteDestinationUrl(destinationId), "DELETE");
      alert('Destino eliminado con éxito');
      navigate("/");  
    } catch (error) {
      console.error("Error al eliminar el destino:", error);
      alert("Hubo un error al eliminar el destino.");
    }
  };

  const handleCancel = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <img
        src={Delete}
        className="h-[2.5rem] w-[1.917rem] cursor-pointer"
        onClick={handleDelete} 
      />
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={handleCancel}  
        onConfirm={handleConfirm}  
      />
    </>
  );
}

export default DeleteButton;