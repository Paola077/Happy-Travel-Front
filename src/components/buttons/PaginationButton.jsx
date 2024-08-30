
import ArrowsIcon from '../../../public/assets/Arrows-icon.svg'; 

const PaginationButton = ({ onClick, ariaLabel, rotate = '0' }) => {
    return (
        <button
            className="rounded-[1.25rem] w-[60px] h-[40px] text-[color:var(--col-yellow-light)] bg-[color:var(--col-blue)] flex items-center pl-[1.063rem] focus:opacity-[0.85] active:opacity-[0.85]"
            onClick={onClick}
            aria-label={ariaLabel}
            style={{ transform: `rotate(${rotate}deg)` }}
            >
            <img
            src={ArrowsIcon}
            alt={ariaLabel}
            className="w-[1.563rem] h-[1.563rem]"
        />
        </button>
    );
};

export default PaginationButton;

