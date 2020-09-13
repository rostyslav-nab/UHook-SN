import React from "react"
import classes from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";

export const Dialog = ({id, name}) => {

    const path = `/dialogs/${id}`

    return (
        <div className={classes.dialog}>
            <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
            <NavLink to={path} className={classes.dialogItem}>{name}</NavLink>
        </div>
    )
}