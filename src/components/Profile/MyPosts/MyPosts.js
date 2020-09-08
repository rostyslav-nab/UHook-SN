import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post"
import {Field, reduxForm} from "redux-form"

export const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.postPage}>
                <div className="row">
                    <div className="col-7">
                        <div className={classes.leftBlock}>
                            <div className={classes.createPost}>
                                <AddPostFormRedux onSubmit={addPost}/>
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

// ------------------  ReduxForm  -----------------------

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.userInfo}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="avatar"/>
                <Field component='textarea' name='newPostText' className="form-control" />
            </div>
            <div>
                <button className='btn btn-info'>Add Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'addPostForm'
})(AddPostForm)