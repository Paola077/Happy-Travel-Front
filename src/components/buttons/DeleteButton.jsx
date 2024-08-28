import Delete from "../../../public/assets/Delete-icon.svg";
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
