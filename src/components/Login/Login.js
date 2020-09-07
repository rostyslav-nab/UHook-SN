import React from "react"
import classes from './Login.module.scss'
import {Field, reduxForm} from "redux-form"

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.loginWrapper}>
            <h1>Login</h1>
            <div className={classes.formBlock}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <Field component={'input'} name={'login'} className="form-control" id="login" aria-describedby="loginHelp" />
                <small id="loginHelp" className="form-text text-muted">Please, enter your Login</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field component={'input'} name={'password'} className="form-control" id="password" />
            </div>
            <div className="form-group form-check">
                <Field component={'input'} name={'rememberMe'} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button className="btn btn-primary">Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)