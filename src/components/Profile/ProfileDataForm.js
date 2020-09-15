import React from "react"
import {createField, Input, Textarea} from "../common/FormsControls/FormsControls"
import {reduxForm} from "redux-form"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button className='btn btn-primary'>Save</button></div>
        {error && <div>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input, {}, '', 'form-control col-4')}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"}, '', 'form-check-input position-static' )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea, {}, '', 'form-control col-4'  )}
        </div>

        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea, {}, '', 'form-control col-4'  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} >
                <b>{key}: {createField(key, "contacts." + key, [], Input, {}, '', 'form-control col-4')}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;