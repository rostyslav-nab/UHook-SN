import React, {useState} from "react"
import classes from './ProfileInfo.module.scss'
import {Loader} from "../../common/loader/Loader"
import {ProfileStatus} from "../../Status/ProfileStatus"
import notPhoto from '../../../assets/notPhoto2.png'
import ProfileDataFormReduxForm from "../ProfileDataForm"

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Loader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
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
                {editMode ? <ProfileDataFormReduxForm profile={profile} onSubmit={onSubmit}/> : <ProfileData activateEditMode={()=> setEditMode(true)}
                                                                                profile={profile} isOwner={isOwner}/>}
                <div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <>
            {isOwner && <button className='btn btn-primary' onClick={activateEditMode}>Edit</button>}
            <h1>FullName: {profile.fullName}</h1>
            <div>
                {profile.aboutMe && <p>About Me: {profile.aboutMe}</p>}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}