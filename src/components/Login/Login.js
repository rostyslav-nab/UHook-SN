import React from "react"
import classes from './Login.module.scss'
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {requiredFields} from "../../utils/validators/validators"
import {connect} from "react-redux"
import {login} from "../redux/authReducer"
import {Redirect} from "react-router-dom"

const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth){
        return <Redirect to='/profile'/>
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

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <Field component={Input} name='email' className="form-control" placeholder='Email'
                       validate={[requiredFields]}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field component={Input} type='password' name='password' className="form-control"
                       validate={[requiredFields]} placeholder='Password'
                       id="password" />
            </div>
            <div className="form-group form-check">
                <Field component={Input} name={'rememberMe'} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button className="btn btn-primary">Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)