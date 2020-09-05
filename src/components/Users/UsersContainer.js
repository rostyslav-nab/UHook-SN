import {connect} from "react-redux"
import {Users} from "./Users"
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from "../redux/usersReducer"
import {compose} from "redux"

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

export const UsersContainer = compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers
    })
)(Users)
