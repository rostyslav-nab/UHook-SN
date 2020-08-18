import React from "react"
import classes from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";

export const Dialog = (props) => {

    const path = `/dialogs/${props.id}`

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}