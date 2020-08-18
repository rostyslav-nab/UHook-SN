import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post"

export const MyPosts = (props) => {
    let postsElements = props.posts.map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
      <div className={classes.myPostWrapper}>
          <div className={classes.addPostBlock}>
              <input type="text" className="form-control" ref={newPostElement}/>
              <div>
                  <button className='btn btn-primary' onClick={addPost}>Add Post</button>
                  <button className='btn btn-primary' onClick={addPost}>Add Post</button>
                  <button className='btn btn-primary' onClick={addPost}>Add Post</button>
              </div>
          </div>
          {postsElements}
      </div>
    )
}