import React from "react"
import classes from './Navbar.module.scss'

export const Navbar = () => {
    return(
        <div className={classes.appNavbar}>
            <div className={classes.navbarMenu}>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                </ul>
            </div>
        </div>
    )
}