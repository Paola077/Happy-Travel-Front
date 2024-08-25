import ButtonSample from "./ButtonSample";


const CancelButton = ({onClick, type}) => {
    return (
    <>
    <ButtonSample   content = "Cancelar" 
                    bgColor="bg-[color:var(--col-red)]"
                    ariaLabel="botón para cancelar la acción"
                    onClick={onClick}
                    type={type}/>
    </>
    
    )
}

export default CancelButton
