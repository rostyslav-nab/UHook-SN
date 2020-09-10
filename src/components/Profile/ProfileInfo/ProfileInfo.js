import React from "react"
import classes from './ProfileInfo.module.scss'
import {Loader} from "../../common/loader/Loader"
import {ProfileStatus} from "../../Status/ProfileStatus"
import notPhoto from '../../../assets/notPhoto2.png'

export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    return (
        <div className={classes.avaDescriptionWrapper}>
            <div className={classes.backgroundTitle}>
                <img src="https://images.unsplash.com/photo-1584947114153-e9a2a9ec1501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="backgroundTitle"/>
            </div>
            <div className={classes.mainInfo}>
                {!props.profile.photos.large ? <img src={notPhoto} alt="notPhoto"/>
                : <img src={props.profile.photos.large} alt="avatar"/>}
                <h1>{props.profile.fullName}</h1>
                <p>React/Redux Developer</p>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <hr/>
        </div>
    )
}