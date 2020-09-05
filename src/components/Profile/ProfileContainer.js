import React, {useEffect} from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {getUserProfile} from "../redux/profileReducer"
import {Redirect, withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if(!userId) {
            userId = 2
        }
        props.getUserProfile(userId)
    }, [])

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return <Profile {...props} profile={props.profile}/>
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})


export default compose(
    connect(mapStateToProps, {getUserProfile} ),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

