import {SET_USER_DATA} from "../../types"
import {AuthAPI} from "../api/api"
import {stopSubmit} from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Something went wrong'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch) => {
    AuthAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
