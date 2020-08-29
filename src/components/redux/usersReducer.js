import {FOLLOW, SET_USERS, UNFOLLOW} from "../../types"

let initialState = {
    users: [
        {id: 1, photoUrl:'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', followed: true, fullName: 'Rostyslav', status: 'Developer', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl:'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', followed: false, fullName: 'Sveta', status: 'Developer react', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 3, photoUrl:'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', followed: true, fullName: 'Dmitriy', status: 'Developer redux', location: {city: 'Paris', country: 'France'}},
        {id: 4, photoUrl:'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', followed: true, fullName: 'Vlad', status: 'Developer ui', location: {city: 'Rom', country: 'Italy'}},
        {id: 5, photoUrl:'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', followed: false, fullName: 'Forrest', status: 'Developer PM', location: {city: 'Kyiv', country: 'Ukraine'}}
    ]
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

