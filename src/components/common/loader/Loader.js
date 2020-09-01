import React from "react"
import loader from "../../../assets/loader2.gif"
import classes from "./Loader.module.scss"

export const Loader = () => {
    return <img src={loader} className={classes.loader} alt="loader"/>
}