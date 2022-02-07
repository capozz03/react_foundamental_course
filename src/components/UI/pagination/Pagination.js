import React from 'react';
import s from './Pagination.module.css';
import { usePagination } from './../../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className={s.page__wrapper}>
            {pagesArray.map(p =>
            <span
                onClick={() => {changePage(p)}}
                key={p} 
                className={page === p ? 'page page__current' : 'page'}
            >
                {p}
            </span>
            )}
        </div>
    );
};

export default Pagination;