import ButtonSample from "./ButtonSample";


const CancelButton = ({onClick, type}) => {
    return (
    <>
    <ButtonSample   content = "Cancelar" 
                    bgColor="bg-[color:var(--col-red)]"
                    ariaLabel="botón para cancelar la acción"
                    onClick={onClick}
                    type={type}
                    className="ml-[0.625rem]"
                    />
    </>
    
    )
}

export default CancelButton
