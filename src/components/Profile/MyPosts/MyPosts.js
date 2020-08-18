import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
      <div className={classes.myPostWrapper}>
          <Post/>
          <Post/>
          <Post/>
      </div>
    )
}