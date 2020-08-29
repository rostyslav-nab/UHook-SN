import React from "react"
import classes from './Users.module.scss'
import * as axios from "axios"
import noPhoto from '../../assets/notPhoto.png'

export const Users = (props) => {
        if(props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res=> {
                    props.setUsers(res.data.items)
                    console.log(res.data.items)
                })
        }

    return (
        <div>
            {
                props.users.map(user=>
                        <div key={user.id} className={classes.usersList}>
                            <div className={classes.userCard}>
                                <img src={user.photos.small != null ? user.photos.small : noPhoto} alt="userAva"/>
                                <div className={classes.userDescription}>
                                    <h4>{user.name}</h4>
                                    <div className={classes.userLocation}>
                                        {/*<span>City: {user.location.city}</span>*/}
                                        {/*<span>Country: {user.location.country}</span>*/}
                                    </div>
                                    <div className={classes.userStatus}>
                                        <span>Status: {user.status != null ? user.status : 'no status...'}</span>
                                    </div>
                                    { user.followed
                                        ? <button className={'btn btn-danger'} onClick={()=>{props.unFollow(user.id)}}>Unfollow</button>
                                        : <button className={'btn btn-primary'} onClick={() => {props.follow(user.id)}}>Follow</button>}
                                </div>
                            </div>
                        </div>
                )
            }
        </div>
    )
}