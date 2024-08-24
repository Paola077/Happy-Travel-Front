import ButtonSample from "./ButtonSample";


const CancelButton = ({onClick}) => {
    return (
    <>
    <ButtonSample   content = "Cancelar" 
                    bgColor="bg-[color:var(--col-red)]"
                    ariaLabel="botón para cancelar la acción"
                    onClick={onClick}/>
    </>
    
    )
}

export default CancelButton
