import React from "react"
import classes from './Post.module.scss'

export const Post = (props) => {
    return (
        <div className={classes.postWrapper}>
            <div className={classes.userInfo}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="avatar"/>
                <h6 className={classes.postTitle}>Post</h6>
            </div>
            <div className='d-flex'>
                <img src="https://cdn3.iconfinder.com/data/icons/email-134/32/Email_letter_communication_post-32.png"
                     alt="post"/>
                <p className={classes.postText}>{props.message}</p>
            </div>
            <div className="d-flex">
                <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/heart-32.png" alt="like"/>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    )
}