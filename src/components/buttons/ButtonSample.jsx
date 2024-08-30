
const ButtonSample = ({ content, bgColor, onClick, ariaLabel, type = "button", className }) => {
    return (
        <button
            className={`rounded-[1.25rem] w-[7.5rem] h-[2.5rem] text-[color:var(--col-yellow-light)] jaldi-regular text-md flex items-center justify-center text-capitalize ${bgColor} focus:opacity-[0.85] active:opacity-[0.85] ${className}`}
            onClick={onClick}  
            aria-label={ariaLabel}
            type={type}  
        >
            {content}
        </button>
    );
};

export default ButtonSample;
