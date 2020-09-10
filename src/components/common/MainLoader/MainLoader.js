import React from "react"
import classes from './MainLoader.module.scss'
import mainLogo from '../../../assets/logo.jpg'


export const MainLoader = () => {
    return (
        <>
            <img src={mainLogo} alt="logoLoader" className={classes.loaderLogo}/>
            <div id={classes.cubeLoader}>
                <div className={classes.caption}>
                    <div className={classes.cubeLoader}>
                        <div className={classes.cube + ' ' + classes.loader4}></div>
                        <div className={classes.cube + ' ' + classes.loader2}></div>
                        <div className={classes.cube + ' ' + classes.loader3}></div>
                        <div className={classes.cube + ' ' + classes.loader4}></div>
                    </div>
                </div>
            </div>
        </>
    )
}