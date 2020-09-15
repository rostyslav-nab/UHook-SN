import React from "react"
import {createField, Input, Textarea} from "../common/FormsControls/FormsControls"
import {reduxForm} from "redux-form"
import classes from './ProfileDataForm.module.scss'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} >
        <div className={classes.saveButton}><button className='btn btn-primary'>Save</button></div>
        {error && <div className='alert alert-warning'>
            {error}
        </div>
        }
        <div className={classes.editFormData}>
            <div>
                <b>Full name:</b> {createField("Full name", "fullName", [], Input, {}, '', 'form-control col-4')}
            </div>
            <div>
                <b>Looking for a job:</b> { createField("", "lookingForAJob", [], Input,
                {type: "checkbox"}, '', 'form-check-input' + ' ' + classes.lookingForJob )}
            </div>
            <div>
                <b>My professional skills:</b>
                { createField("My professional skills", "lookingForAJobDescription", [], Textarea, {}, '', 'form-control col-4'  )}
            </div>

            <div>
                <b>About me:</b>
                { createField("About me", "aboutMe", [], Textarea, {}, '', 'form-control col-4'  )}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <b>{key}: {createField(key, "contacts." + key, [], Input, {}, '', 'form-control col-4')}</b>
                </div>
            })}
            </div>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux;