import {INITIALIZED_SUCCESS} from "../../types"
import {getAuthUserData} from "./authReducer"

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }

}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })

}

