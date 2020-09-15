import {connect} from "react-redux"
import {MapDispatchPropsUsersType, MapStatePropsUsersType, Users} from "./Users"
import {
    follow, getUsers,
    unFollow
} from "../redux/usersReducer"
import {compose} from "redux"
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../redux/usersSelector"
import {AppStateType} from "../redux/redux-store"

let mapStateToProps = (state: AppStateType): MapStatePropsUsersType => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export const UsersContainer = compose(
    connect<MapStatePropsUsersType, MapDispatchPropsUsersType, {}, AppStateType>(mapStateToProps, {
        follow,
        unFollow,
        getUsers
    })
)(Users)
