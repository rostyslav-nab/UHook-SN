import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {sidebarReducer} from "./sidebarReducer"
import {usersReducer} from "./usersReducer"
import {authReducer} from "./authReducer"
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
