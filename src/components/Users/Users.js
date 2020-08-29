import React from "react"
import classes from './Users.module.scss'

export const Users = (props) => {

    return (
        <div>
            {
                props.users.map(user=>{
                    return (
                        <div key={user.id} className={classes.usersList}>
                            <div className={classes.userCard}>
                                <img src={user.photoUrl} alt="userAva"/>
                                <div className={classes.userDescription}>
                                    <h4>{user.fullName}</h4>
                                    <div className={classes.userLocation}>
                                        <span>City: {user.location.city}</span>
                                        <span>Country: {user.location.country}</span>
                                    </div>
                                    <div className={classes.userStatus}>
                                        <span>Status: {user.status}</span>
                                    </div>
                                    { user.followed
                                        ? <button className={'btn btn-danger'} onClick={()=>{props.unFollow(user.id)}}>Unfollow</button>
                                        : <button className={'btn btn-primary'} onClick={() => {props.follow(user.id)}}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}