import React, {useEffect} from "react"
import {Profile} from "./Profile"
import * as axios from "axios"
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {

    let userId = props.match.params.userId

    if(!userId) {
        userId = 2
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [])
    return <Profile {...props} profile={props.profile}/>

}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile} )(withUrlDataContainerComponent)

