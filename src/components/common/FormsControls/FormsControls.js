import React from "react"
import classes from './FormsControls.module.scss'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <textarea {...input} {...props}/>
            {hasError && <small>{meta.error}</small>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <input {...input} {...props}/>
            {hasError && <small>{meta.error}</small>}
        </div>
    )
}