import React, {useEffect} from "react"
import classes from './Users.module.scss'
import * as axios from "axios"
import noPhoto from '../../assets/notPhoto.png'
import {Loader} from "../common/loader/Loader"
import {NavLink} from "react-router-dom";

export const Users = (props) => {

    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(res => {
                props.toggleIsFetching(false)
                props.setUsers(res.data.items)
                //props.setTotalUsersCount(res.data.totalCount)
            })
    }, [])

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(res => {
                props.setUsers(res.data.items)
                props.toggleIsFetching(false)
            })
    }


    return (
        <div>
            <div>
                {
                    pages.map(p => <span className={props.currentPage === p && classes.selectedPage}
                                         onClick={() => onPageChanged(p)}> {p}</span>)
                }
            </div>
            <div>
                {props.isFetching ? <Loader/> : <div>
                    {
                        props.users.map(user =>
                            <div key={user.id} className={classes.usersList}>
                                <div className={classes.userCard}>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={user.photos.small != null ? user.photos.small : noPhoto} alt="userAva"/>
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
                                            ? <button className={'btn btn-danger'} onClick={() => {
                                                props.unFollow(user.id)
                                            }}>Unfollow</button>
                                            : <button className={'btn btn-primary'} onClick={() => {
                                                props.follow(user.id)
                                            }}>Follow</button>}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>}
            </div>
        </div>
    )
}