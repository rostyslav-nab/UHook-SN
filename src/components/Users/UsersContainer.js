import {connect} from "react-redux"
import {Users} from "./Users"
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
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

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers
    })
)(Users)
