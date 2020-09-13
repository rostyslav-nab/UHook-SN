import React from "react"
import classes from './User.module.scss'
import noPhoto from '../../assets/notPhoto.png'
import {NavLink} from "react-router-dom"

export const User = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div className={classes.usersList}>
            <div className={classes.userCard}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : noPhoto}
                         alt="userAva"/>
                </NavLink>
                <div className={classes.userDescription}>
                    <h4>{user.name}</h4>
                    <div className={classes.userLocation}>
                        <span>City: {"user.location.city"}</span>
                    </div>
                    <div className={classes.userStatus}>
                        <span>Status: {user.status != null ? user.status : 'no status...'}</span>
                    </div>
                    {user.followed
                        ? <button className={'btn btn-danger'}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id)
                                  }}>Unfollow</button>
                        : <button className={'btn btn-primary'}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}