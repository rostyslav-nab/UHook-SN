import React from "react"
import classes from './AvaDescription.module.scss'

export const AvaDescription = () => {
    return(
        <div className={classes.avaDescriptionWrapper}>
            <img src="https://u.kanobu.ru/articles/pics/63588874-3500-470c-adbc-e5ba8c2df976.jpg" alt="avatar"/>
            <p>Description</p>
        </div>
    )
}