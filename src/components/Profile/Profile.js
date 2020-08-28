import React from "react"
import classes from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostContainer} from './MyPosts/MyPostsContainer'

export const Profile = (props) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}