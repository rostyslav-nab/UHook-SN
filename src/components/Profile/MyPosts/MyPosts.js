import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post"
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../../../types";

export const MyPosts = (props) => {
    let postsElements = props.posts.map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    const addPost = () => {
        props.dispatch({type: ADD_POST})
    }

    const onPostChange = (e) => {
        let text = e.target.value
        props.dispatch({type: UPDATE_NEW_POST_TEXT, text})
    }

    return (
      <div className={classes.myPostWrapper}>
          <div className={classes.addPostBlock}>
              <input type="text" className="form-control" onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
              <div>
                  <button className='btn btn-primary' onClick={addPost}>Add Post</button>
              </div>
          </div>
          {postsElements}
      </div>
    )
}