import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../../types"

let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post', likesCount: 3},
        {id: 2, message: 'The day was good', likesCount: 14},
        {id: 3, message: 'Thanks React!!!', likesCount: 1}
    ],
    newPostText: 'Social Network Lega'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}