/* import Delete from "../../../public/assets/Delete-icon.svg";
import { useNavigate } from "react-router-dom";
function DeleteButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit"); // Cambiar por un ALERT
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
 */
import React, { useState } from 'react';
import Delete from "../../../public/assets/Delete-icon.svg";
import ConfirmModal from '../modal/ConfirmModal'; // Asegúrate de que la ruta sea correcta

const DeleteButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    console.log('Destino eliminado');
    //Añadir lógica para eliminar el destino
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <><img
    src={Delete}
    className="h-[2.5rem] w-[1.917rem] cursor-pointer"
    onClick={handleDelete}
  />
    <div>
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={handleCancel} 
        onConfirm={handleConfirm}
      />
    </div>
    </>
  );
};

export default DeleteButton;