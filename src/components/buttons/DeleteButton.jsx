/* import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Delete from "../../../public/assets/Delete-icon.svg";
import ConfirmModal from '../modal/ConfirmModal'; 
import { apiRequest } from "../../services/apiRequest";
import { getDeleteDestinationUrl } from "../../config/urls";

function DeleteButton({ destinationId }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setModalOpen(true); 
  };

  const handleConfirm = async () => {
    setModalOpen(false);

    try {
      await apiRequest(getDeleteDestinationUrl(destinationId), "DELETE");
      //alert('Destino eliminado con éxito');
      setSuccessModalOpen(true);  // Abre el modal de éxito
      navigate("/");  
    } catch (error) {
      console.error("Error al eliminar el destino:", error);
      alert("Hubo un error al eliminar el destino.");
    }
  };

  const handleSuccessConfirm = () => {
    setSuccessModalOpen(false);
    navigate("/");  // Redirige después de cerrar el modal de éxito
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
        onClose={handleCancel}  
        onConfirm={handleConfirm}  
      />
        <ConfirmModal 
        isOpen={isSuccessModalOpen} 
        message={"Destino eliminado con éxito"}
        onConfirm={handleSuccessConfirm}  
        showOnlyAccept={true}  
      />
    </>
  );
}

export default DeleteButton; */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Delete from "../../../public/assets/Delete-icon.svg";
import ConfirmModal from '../modal/ConfirmModal'; 
import { apiRequest } from "../../services/apiRequest";
import { getDeleteDestinationUrl } from "../../config/urls";

function DeleteButton({ destinationId }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setModalOpen(true); 
  };

  const handleConfirm = async () => {
    setModalOpen(false);

    try {
      const headers = {
        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,  // Asumiendo que guardas el token en sessionStorage
        'Content-Type': 'application/json'
      };
      await apiRequest(getDeleteDestinationUrl(destinationId), "DELETE",  null, headers);
      //alert('Destino eliminado con éxito');
      setSuccessModalOpen(true);  // Abre el modal de éxito
      //navigate("/");  
    } catch (error) {
      console.error("Error al eliminar el destino:", error);
      alert("Hubo un error al eliminar el destino.");
    }
  };

  const handleSuccessConfirm = () => {
    setSuccessModalOpen(false);
    navigate("/");  // Redirige después de cerrar el modal de éxito
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
        onClose={handleCancel}  
        onConfirm={handleConfirm}  
      />
        <ConfirmModal 
        isOpen={isSuccessModalOpen} 
        message={"Destino eliminado con éxito"}
        onConfirm={handleSuccessConfirm}  
        showOnlyAccept={true}  
      />
    </>
  );
}

export default DeleteButton;