import React from "react"
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom"

export const Header = ({isAuth, login, logout}) => {
    return (
        <div className={classes.appHeader}>
            <img src="https://cdn1.savepice.ru/uploads/2020/8/22/18be59617748ce22847857f851fc47b7-full.png" alt="mainLogo"/>
            <input type="text" placeholder='Search for Friends, Videos and more...' className='form-control'/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} <button className='btn btn-danger btn-sm' onClick={logout}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}