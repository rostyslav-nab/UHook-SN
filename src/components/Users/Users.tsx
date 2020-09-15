import React, {useEffect} from "react"
import {Loader} from "../common/loader/Loader"
import {Paginator} from "../common/Paginator/Paginator"
import {User} from "./User"
import {UserType} from "../../TSTypes/Types"

export type MapStatePropsUsersType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    users: Array<UserType>
    followingInProgress: Array<number>
}

export type MapDispatchPropsUsersType = {
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStatePropsUsersType & MapDispatchPropsUsersType

export const Users: React.FC<PropsType> = ({currentPage, pageSize,
                                               totalUsersCount, isFetching, users,
                                               followingInProgress, unFollow, follow, getUsers}) => {

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [])

    const onPageChanged = (pageNumber: number) => {
        getUsers(pageNumber, pageSize)
    }

    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}/>
            <div>
                {
                    isFetching ? <Loader/> :
                        <div>
                            {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress}
                                                     follow={follow} unFollow={unFollow}/>)}
                        </div>
                }
            </div>
        </div>
    )
}