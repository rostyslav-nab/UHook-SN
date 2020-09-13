import React from "react"
import classes from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostContainer} from './MyPosts/MyPostsContainer'

export const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer />
        </div>
    )
}