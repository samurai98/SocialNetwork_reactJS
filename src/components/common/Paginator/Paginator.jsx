import React from "react";
import styles from "./Paginator.module.css";
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
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>left</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span
                    className={cn({[styles.selectPage]: currentPage === p}, styles.allPage, styles.pageNumber)}
                    onClick={() => {
                        onPageChanged(p)
                    }}
                >{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>right</button>}
    </div>
};

export default Paginator;