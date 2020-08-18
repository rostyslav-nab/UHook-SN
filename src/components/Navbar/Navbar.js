import React from "react"
import classes from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={classes.appNavbar}>
            <div className={classes.navbarMenu}>
                <ul>
                    <li>
                        <div className={classes.activeMenuButton}>
                            <img src="https://cdn1.iconfinder.com/data/icons/common-version-3-0/1024/user-16.png" alt="profile"/>
                            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={classes.activeMenuButton}>
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2310/24/_messages_communication_social_media_network-16.png" alt="messages"/>
                            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={classes.activeMenuButton}>
                            <img src="https://cdn0.iconfinder.com/data/icons/zondicons/20/news-paper-16.png" alt="news"/>
                            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={classes.activeMenuButton}>
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/music-16.png" alt="music"/>
                            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}