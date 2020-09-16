import React from "react"
import classes from './FormsControls.module.scss'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"
import {ValidatorsTypes} from "../../../utils/validators/validators"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}



export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField<FormsKeysType extends string> (placeholder: string | undefined, name: FormsKeysType,
                            validators: Array<ValidatorsTypes>, component: React.FC<WrappedFieldProps>,
                            props = {}, text = "", btCN: string) {
    return  (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators} className={btCN}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}