import React, {useState} from "react"
import classes from './ProfileStatus.module.scss'

export const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div className={classes.status}>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status}</span>}
            {editMode && <div className={classes.inputField}>
                <input type="text" autoFocus={true} value={props.status} className="form-control" onBlur={deactivateEditMode}/>
            </div>}
        </div>
    )
}