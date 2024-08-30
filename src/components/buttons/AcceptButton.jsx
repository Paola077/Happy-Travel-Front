

import ButtonSample from "./ButtonSample";

const AcceptButton = ({ onClick, type = "submit" }) => {
    return (
        <ButtonSample
            content="Aceptar"
            bgColor="bg-[color:var(--col-green)]"
            ariaLabel="botón para aceptar la acción"
            onClick={onClick}  
            type={type}  
        />
    );
};

export default AcceptButton;
