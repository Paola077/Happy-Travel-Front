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
        className="h-8 w-8 cursor-pointer"
        alt="Edit"
        onClick={handleClick}
      />
    </>
  );
}
export default EditButton;
