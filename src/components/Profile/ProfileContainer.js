import React, {useEffect} from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {getStatus, getUserProfile, updateStatus} from "../redux/profileReducer"
import {Redirect, withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if(!userId) {
            userId = props.authorizedUserId
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

