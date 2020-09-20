import React from "react"
import classes from './Login.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {createField, Input} from "../common/FormsControls/FormsControls"
import {requiredFields} from "../../utils/validators/validators"
import {connect} from "react-redux"
import {login} from "../redux/authReducer"
import {Redirect} from "react-router-dom"
import {AppStateType} from "../redux/redux-store"


export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type LoginFormValuesTypeKeys = keyof LoginFormValuesType


const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({login, isAuth, captchaUrl}) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth){
        return <Redirect to='/profile'/>
    }

    return (
        <div className={classes.loginWrapper}>
            <h1>Login</h1>
            <div className={classes.formBlock}>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        </div>
    )
}


type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit,
                                                                                             error, captchaUrl}) => {

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
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols', 'captcha', [requiredFields], Input, {}, '', 'form-control' )}
            <hr/>
            <button className="btn btn-primary">Login</button>
        </form>
    )
}

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)