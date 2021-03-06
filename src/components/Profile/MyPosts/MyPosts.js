import React from "react"
import classes from './MyPosts.module.scss'
import {Post} from "./Post/Post"
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, requiredFields} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormsControls"

export const MyPosts = React.memo(({posts, addPost}) => {
    let postsElements = posts.map((post) => <Post key={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const onAddPost = (values) => {
        addPost(values.newPostText)
    }

    return (
        <div className={classes.myPostWrapper}>
            <div className={classes.postPage}>
                <div className="row">
                    <div className="col-7">
                        <div className={classes.leftBlock}>
                            <div className={classes.createPost}>
                                <AddPostFormRedux onSubmit={onAddPost}/>
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
})

// ------------------  ReduxForm  -----------------------

const maxLength10 = maxLengthCreator(10)

const AddPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.userInfo}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="avatar"/>
                <Field component={Textarea} name='newPostText' className="form-control" placeholder={'Put the post'}
                validate={[requiredFields, maxLength10]}
                />
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