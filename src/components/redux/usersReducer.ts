import {UsersAPI} from "../api/api"
import {updateObjectInArray} from "../../utils/objectsHelper"
import {UserType} from "../../TSTypes/Types"
import {AppStateType, InferActionsType} from "./redux-store"
import {Dispatch} from "redux"

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

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_FOLLOWING_IN_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
    acceptFollow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    acceptUnFollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>)=> ({type: 'SET_USERS', users} as const),
    setCurrentPage:(currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setUsersTotalCount:(totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),
    toggleIsFetching:(isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleFollowingInProgress:(isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const)
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setUsersTotalCount(data.totalCount))
    }
}

const _followUnFollowFlow = async (dispatch: DispatchType, userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        _followUnFollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), actions.acceptFollow)
    }
}

export const unFollow = (userId: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        _followUnFollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), actions.acceptUnFollow)
    }
}