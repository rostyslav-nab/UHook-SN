import React from "react"
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom"
import MainLogo from '../../assets/logo.jpg'

export const Header = ({isAuth, login, logout}) => {
    return (
        <div className={classes.appHeader}>
            <img src={MainLogo} alt="mainLogo"/>
            <input type="text" placeholder='Search for Friends, Videos and more...' className='form-control'/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} <button className='btn btn-danger btn-sm' onClick={logout}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}