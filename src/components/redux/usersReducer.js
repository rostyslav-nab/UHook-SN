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

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {

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

export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))


    }
}

// export const follow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingInProgress(true, userId))
//         let response = await UsersAPI.follow(userId)
//         if (response.data.resultCode === 0) {
//             dispatch(acceptFollow(userId))
//         }
//         dispatch(toggleFollowingInProgress(false, userId))
//     }
// }
//
// export const unFollow = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleFollowingInProgress(true, userId))
//         UsersAPI.unfollow(userId)
//             .then((response)=>{
//                 if (response.data.resultCode === 0) {
//                     dispatch(acceptUnFollow(userId))
//                 }
//             })
//
//
//         dispatch(toggleFollowingInProgress(false, userId))
//
//     }
// }

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), acceptFollow)
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), acceptUnFollow)
    }
}