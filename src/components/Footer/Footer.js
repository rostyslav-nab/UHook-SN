import React from "react"
import classes from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
            <div className='d-flex'>
              <p><a href="https://kyiv.codes/" target="_blank" rel="noopener noreferrer">My Portfolio</a></p>
              <p><a href="https://github.com/rostyslav-nab" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
        </div>
    )
}