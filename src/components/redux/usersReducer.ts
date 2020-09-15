import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOWING_IN_PROGRESS,
    TOGGLE_IS_FETCHING,
    UNFOLLOW
} from "../../types"
import {UsersAPI} from "../api/api"
import {updateObjectInArray} from "../../utils/objectsHelper"
import {UserType} from "../../TSTypes/Types"

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type AcceptFollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export const acceptFollow = (userId: number):AcceptFollowActionType => ({type: FOLLOW, userId})
type AcceptUnFollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const acceptUnFollow = (userId: number):AcceptUnFollowActionType => ({type: UNFOLLOW, userId})
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):SetUsersActionType => ({type: SET_USERS, users})
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount: number):SetUsersTotalCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number):ToggleFollowingInProgressActionType => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))


    }
}

const followUnFollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnFollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), acceptFollow)
    }
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnFollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), acceptUnFollow)
    }
}