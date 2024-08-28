import Edit from "../../../public/assets/Edit-icon.svg";
import { useNavigate } from "react-router-dom";
function EditButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit"); // Cambiar la ruta
  };
  return (
    <>
      <img
        src={Edit}
        className="h-[2.5rem] w-[2.5rem] cursor-pointer"
        alt="Edit"
        onClick={handleClick}
      />
    </>
  );
}
export default EditButton;
