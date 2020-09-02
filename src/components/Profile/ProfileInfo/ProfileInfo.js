import React from "react"
import classes from './ProfileInfo.module.scss'
import {Loader} from "../../common/loader/Loader";

export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    return (
        <div className={classes.avaDescriptionWrapper}>
            <div className={classes.backgroundTitle}>
                <img src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="backgroundTitle"/>
            </div>

            <div className={classes.mainInfo}>
                <img src={props.profile.photos.large} alt="avatar"/>
                <h1>{props.profile.fullName}</h1>
                <p>React/Redux Developer</p>
                <p>{props.profile.aboutMe}</p>
            </div>
            <hr/>
        </div>

    )
}