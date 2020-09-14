import React from "react"
import classes from './ProfileInfo.module.scss'
import {Loader} from "../../common/loader/Loader"
import {ProfileStatus} from "../../Status/ProfileStatus"
import notPhoto from '../../../assets/notPhoto2.png'

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Loader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.avaDescriptionWrapper}>
            <div className={classes.backgroundTitle}>
                <img
                    src="https://images.unsplash.com/photo-1584947114153-e9a2a9ec1501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="backgroundTitle"/>
            </div>
            <div className={classes.mainInfo}>
                <img src={profile.photos.large || notPhoto} alt="avatar"/>
                <div>
                    {isOwner && <input className={classes.uploadFileInput} type='file' onChange={mainPhotoSelected}/>}
                </div>
                <h1>{profile.fullName}</h1>
                <p>React/Redux Developer</p>
                <p>{profile.aboutMe}</p>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
            <hr/>
        </div>
    )
}