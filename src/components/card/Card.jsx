
//NO USARLA, TAPA EL CONTENIDO
const Card = ({className, children}) => {
    return (
    <div className={` border-[color:var(--col-yellow-light)] border-4 border-solid bg-transparent rounded-[1.25rem]  ${className}`}>
        {children}
    </div>
    )
}

export default Card