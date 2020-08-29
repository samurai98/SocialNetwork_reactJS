import React from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, portionNumber, setPortionNumber, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button className={styles.leftButton} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>&lt;&lt;</button>}
        <div className={styles.allPages}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p}
                                 className={cn({[styles.selectPage]: currentPage === p}, styles.pageNumber)}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
        </div>
        {portionCount > portionNumber &&
        <button className={styles.rightButton} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>>></button>}
    </div>
};

export default Paginator;