import React, {useEffect, useState} from "react"
import classes from './ProfileStatus.module.scss'

export const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={classes.status}>
            {!editMode &&
                <div>
                    <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>

            }

            {editMode &&
                <div className={classes.inputField}>
                    <input type="text" onChange={onStatusChange} autoFocus={true} value={status} className="form-control" onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}