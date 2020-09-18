import {ADD_POST, DELETE_POST, SAVE_PHOTO_SUCCESS, SET_STATUS, SET_USER_PROFILE} from "../../types"
import {stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../../TSTypes/Types"
import {ProfileAPI} from "../api/ProfileApi"


export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'It`s my first post', likesCount: 3},
        {id: 2, message: 'The day was good', likesCount: 14},
        {id: 3, message: 'Thanks React!!!', likesCount: 1}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: action.newPostText,
                likesCount: 5
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
    type: ADD_POST,
    newPostText
})
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const data = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const data = await ProfileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const data = await ProfileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const data = await ProfileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}
