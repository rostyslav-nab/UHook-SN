import React from "react"
import classes from './Message.module.scss'

export const Message = (props) => {
    return (
        <div className={classes.message}>
            <p>{props.message}</p>
        </div>
    )
}