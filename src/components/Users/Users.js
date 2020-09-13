import React, {useEffect} from "react"
import {Loader} from "../common/loader/Loader"
import {Paginator} from "../common/Paginator/Paginator"
import {User} from "./User"

export const Users = ({currentPage, pageSize, totalUsersCount, isFetching, users, followingInProgress, unFollow, follow, getUsers}) => {

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [])

    const onPageChanged = (pageNumber) => {
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
                        {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unFollow={unFollow}/>) }
                    </div>
                }
            </div>
        </div>
    )
}