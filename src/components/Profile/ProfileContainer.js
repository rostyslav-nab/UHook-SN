import React, {useEffect} from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../redux/profileReducer"
import {Redirect, withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

const ProfileContainer = ({authorizedUserId, getUserProfile, getStatus, isAuth, profile, status, updateStatus, savePhoto, ...props}) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if(!userId) {
            userId = authorizedUserId
            if(!userId){
                props.history.push('/login')
            }
        }
        getUserProfile(userId)
        getStatus(userId)
    }, [getUserProfile, getStatus, props.match.params.userId, authorizedUserId, props.history])



    if(!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return <Profile {...props} profile={profile} status={status} updateStatus={updateStatus} isOwner={!props.match.params.userId} savePhoto={savePhoto}/>
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

