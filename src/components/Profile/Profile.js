import React from "react"
import classes from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPosts} from "./MyPosts/MyPosts"

export const Profile = (props) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}