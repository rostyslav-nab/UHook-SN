import React from "react"
import classes from './Header.module.scss'

export const Header = () => {
    return (
        <div className={classes.appHeader}>
            <img src="https://cdn1.savepice.ru/uploads/2020/8/22/18be59617748ce22847857f851fc47b7-full.png" alt="mainLogo"/>
            <input type="text" placeholder='Search for Friends, Videos and more...' className='form-control'/>
        </div>
    )
}