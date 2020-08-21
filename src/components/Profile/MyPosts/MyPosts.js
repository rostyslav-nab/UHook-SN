import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer"

export const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.postPage}>
                <div className="row">
                    <div className="col-7">
                        <div className={classes.leftBlock}>
                            <div className={classes.createPost}>
                                <div className={classes.userInfo}>
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="avatar"/>
                                    <textarea className="form-control" onChange={onPostChange} ref={newPostElement}
                                              value={props.newPostText}/>
                                </div>
                                <div>
                                    <button className='btn btn-info' onClick={addPost}>Add Post</button>
                                </div>
                            </div>
                            {postsElements}
                        </div>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </div>
        </div>
    )
}