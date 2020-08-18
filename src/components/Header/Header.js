import React from "react"
import classes from './Header.module.scss'

export const Header = () => {
    return (
        <div className={classes.appHeader}>
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_person-24.png" alt="mainTitle"/>
            <h1 className={classes.topTitle}>Social Network</h1>
        </div>
    )
}