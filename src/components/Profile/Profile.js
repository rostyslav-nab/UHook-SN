import React from "react"
import classes from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostContainer} from './MyPosts/MyPostsContainer'

export const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <MyPostContainer />
        </div>
    )
}