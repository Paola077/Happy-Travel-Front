const Card = ({className, headerText, children}) => {
    return (
    <div className={` border-[color:var(--col-yellow-light)] border-4 border-solid bg-transparent rounded-[1.25rem]  ${className}`}>
        <div className="w-[90%] flex justify-center mt-[0.625rem] mb-[1.375rem] border-b-[color:var(--col-red)] border-b border-solid">
            <h4 className="jaldi-bold text-lg [color:var(--col-red)] leading-[2.625rem] pb-[0.313rem]">{headerText}</h4>
        </div>
        {children}
    </div>
    )
}

export default Card