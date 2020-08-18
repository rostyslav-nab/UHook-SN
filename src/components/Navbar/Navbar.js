import React from "react"
import classes from './Navbar.module.scss'

export const Navbar = () => {
    return(
        <div className={classes.appNavbar}>
            <div className={classes.navbarMenu}>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/dialogs">Messages</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/music">Music</a></li>
                </ul>
            </div>
        </div>
    )
}