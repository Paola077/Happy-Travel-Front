import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Delete from "../../../public/assets/Delete-icon.svg";
import ConfirmModal from '../modal/ConfirmModal'; 

function DeleteButton({ destinationId, onDelete }) {

  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleDelete = () => {
    setModalOpen(true); 
  };

  const handleConfirm = async () => {
    setModalOpen(false);

    try {

      onDelete(destinationId);

    } catch (error) {
      console.error("Error al eliminar el destino:", error);
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
        message={"¿Quieres eliminar este destino?"}
        onConfirm={handleConfirm}  
        onClose={handleCancel}  
      />
    </>
  );
}

export default DeleteButton;