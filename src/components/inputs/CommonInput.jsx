

const CommonInput = ({ value, onChange, label, id, placeholder, type, inputClassName, imgSrc, imgAlt, imgClassName, onClick }) => {
    return (
        <div className="w-[18.75rem]">
            <label htmlFor={id} className="jaldi-bold text-md text-[color:var(--col-blue)] leading-[2.063rem] w-[18.75rem]">
                {label}
            </label>
            <div className="rounded-[1.25rem] w-[18.75rem] h-[2.5rem] bg-[color:var(--col-yellow-light)] jaldi-regular flex items-center">
                <input
                    id={id}
                    value={value}  
                    onChange={onChange}  
                    className={`custom-input rounded-[1.25rem] w-[18.75rem] h-[2.5rem] text-[color:var(--col-blue)] bg-[color:var(--col-yellow-light)]  text-md pl-[1.063rem] shadow-inset-custom border-0 focus:border-2 focus:border-[color:var(--col-green)] outline-none ${inputClassName}`}
                    placeholder={placeholder}  
                    type={type}          
                />
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={imgClassName}
                        onClick={onClick}
                    />
                )}
            </div>
        </div>
    );
};

export default CommonInput;

