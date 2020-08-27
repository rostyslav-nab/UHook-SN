import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {sidebarReducer} from "./sidebarReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers)