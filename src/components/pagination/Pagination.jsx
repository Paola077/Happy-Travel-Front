import React from 'react';
import PaginationButton from '../buttons/PaginationButton';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const next = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="w-[11.375rem] h-[2.5rem] my-[1.25rem] mx-auto flex items-center gap-8">
            <PaginationButton   
                onClick={prev}
                disabled={currentPage === 1}
                ariaLabel={"Ir a la página anterior"}
                rotate={"180"}
            />

            <p className='jaldi-regular text-lg text-[color:var(--col-blue)]'>
                {currentPage}
            </p>

            <PaginationButton   
                onClick={next}
                ariaLabel={"Ir a la página siguiente"}
                disabled={currentPage === totalPages}
            />
        </div>
    );
}

export default Pagination;
