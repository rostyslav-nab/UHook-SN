import React, {useEffect} from "react"
import {Profile} from "./Profile"
import {connect} from "react-redux"
import {getUserProfile} from "../redux/profileReducer"
import {withRouter} from "react-router-dom"

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if(!userId) {
            userId = 2
        }
        props.getUserProfile(userId)
    }, [])
    return <Profile {...props} profile={props.profile}/>

}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile} )(withUrlDataContainerComponent)

