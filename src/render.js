import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {BrowserRouter} from "react-router-dom"
import {addPost} from "./components/redux/store"

let app = (state) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>)
}

export let rerenderEntireTree = (state) => {
    ReactDOM.render(app(state), document.getElementById('root'))
}




