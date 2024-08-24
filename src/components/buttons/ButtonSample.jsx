

const ButtonSample = ({ content, bgColor, onClick, ariaLabel }) => {
  return (
    <button
      className={`rounded-[1.25rem] w-[120px] h-[40px] text-[color:var(--col-yellow-light)] jaldi-regular text-md flex items-center justify-center text-capitalize ${bgColor} focus:opacity-[0.85] active:opacity-[0.85]`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default ButtonSample;
