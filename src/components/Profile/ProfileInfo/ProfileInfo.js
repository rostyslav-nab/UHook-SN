import React from "react"
import classes from './ProfileInfo.module.scss'
import {Loader} from "../../common/loader/Loader";

export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    return(
        <div className={classes.avaDescriptionWrapper}>
            <div className={classes.backgroundTitle}>
                <img src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="backgroundTitle"/>
            </div>

            <div className={classes.mainInfo}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="avatar"/>
                <h1>Josephine Williams</h1>
                <p>React/Redux Developer</p>
            </div>
            <img src={props.profile.photos.large}/>
            <hr/>
        </div>

    )
}