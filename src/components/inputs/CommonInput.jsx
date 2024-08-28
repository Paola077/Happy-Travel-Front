import { forwardRef } from 'react';

const CommonInput = forwardRef(({
    onClick,
    label,
    labelClassName,
    id,
    placeholder,
    type = 'text', 
    divInputClassName,
    inputClassName,
    imgSrc,
    imgAlt,
    imgClassName,
    error,
    rows,
    onInput, 
    ...rest
}, ref) => {
    return (
        <div className={`w-[18.75rem] flex flex-col ${divInputClassName}`}>
            <label
                htmlFor={id}
                className={`jaldi-bold text-md text-[color:var(--col-blue)] leading-[2.063rem] w-full ${labelClassName}`}
            >
                {label}
            </label>
            <div className={`rounded-[1.25rem] w-full bg-[color:var(--col-yellow-light)] jaldi-regular flex items-center`}>
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        className={`custom-input rounded-[1.25rem] w-full h-[23.25rem] text-[color:var(--col-blue)] bg-[color:var(--col-yellow-light)] text-sm p-[1.063rem] shadow-inset-custom border-0 focus:border-2 focus:border-[color:var(--col-green)] outline-none ${inputClassName}`}
                        placeholder={placeholder}
                        rows={rows}
                        ref={ref}
                        {...rest}
                    />
                ) : (
                    <input
                        id={id}
                        className={`custom-input rounded-[1.25rem] w-full h-[2.5rem] text-[color:var(--col-blue)] bg-[color:var(--col-yellow-light)] text-md pl-[1.063rem] shadow-inset-custom border-0 focus:border-2 focus:border-[color:var(--col-green)] outline-none ${inputClassName}`}
                        placeholder={placeholder}
                        type={type}
                        ref={ref}
                        onInput={onInput} 
                        {...rest}
                    />
                )}
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={imgClassName}
                        onClick={onClick}
                        style={{ pointerEvents: 'none' }}
                    />
                )}
            </div>

            {error && (
                <p className="text-[color:var(--col-red)] jaldi-regular text-sm mb-[-1.25rem]">{error}</p>
            )}
        </div>
    );
});

export default CommonInput;
