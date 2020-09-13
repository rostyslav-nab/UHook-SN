import React from "react"
import classes from './Message.module.scss'

export const Message = ({message}) => {
    return (
        <div className={classes.message}>
            <p>{message}</p>
        </div>
    )
}