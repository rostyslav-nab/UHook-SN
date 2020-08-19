import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {BrowserRouter} from "react-router-dom"
import {store} from '../src/components/redux/store'



let app = (state) =>{
    return (
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    )
}


let rerenderEntireTree = (state) => {
    ReactDOM.render(app(state), document.getElementById('root'))
}




rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)



