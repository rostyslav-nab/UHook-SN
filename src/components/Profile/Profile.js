import React from "react"
import classes from './Profile.module.scss'
import {AvaDescription} from "./AvaDescription/AvaDescription"
import {MyPosts} from "./MyPosts/MyPosts"

export const Profile = () => {
    return(
        <div className={classes.profileWrapper}>
            Profile
            <AvaDescription/>
            <MyPosts/>
        </div>
    )
}