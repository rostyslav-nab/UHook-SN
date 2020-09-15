import React from "react"
import classes from './PageNotFound.module.scss'
import Logo from '../../assets/logo.jpg'


export const NotFound = () => {
    return (
        <div className={classes.pageNotFound}>
            <img src={Logo} alt="404Logo"/>
            <h1>Not Found</h1>
        </div>
    )
}