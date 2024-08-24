import ButtonSample from "./ButtonSample";


const AcceptButton = ({onClick}) => {
    return (
    <>
    <ButtonSample   content = "Aceptar" 
                    bgColor="bg-[color:var(--col-green)]"
                    ariaLabel="botón para aceptar la acción"
                    onClick={onClick}/>
    </>
    
    )
}

export default AcceptButton
