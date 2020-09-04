import {connect} from "react-redux"
import {Users} from "./Users"
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingInProgress,
    toggleIsFetching,
    unFollow
} from "../redux/usersReducer"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(Users)