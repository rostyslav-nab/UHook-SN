import React from "react"

export const Post = (props) => {
    return(
        <div>
            <h4>Post</h4>
            <p>{props.message}</p>
            <span>Likes {props.likesCount}</span>
            <hr/>
        </div>
    )
}