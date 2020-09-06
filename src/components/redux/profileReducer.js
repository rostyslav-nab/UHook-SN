import {ADD_POST, SET_STATUS, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "../../types"
import {ProfileAPI, UsersAPI} from "../api/api"

let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post', likesCount: 3},
        {id: 2, message: 'The day was good', likesCount: 14},
        {id: 3, message: 'Thanks React!!!', likesCount: 1}
    ],
    newPostText: 'Social Network UHook',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likesCount: 5
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.text
            }
        }
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return  {
                ...state,
                status: action.status
            }
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
const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    UsersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}



export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}
