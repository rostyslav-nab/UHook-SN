import React from "react"
import classes from './Paginator.module.scss'


export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(p => <span className={currentPage === p && classes.selectedPage}
                                     onClick={() => onPageChanged(p)}> {p}</span>)
            }
        </div>

    )
}