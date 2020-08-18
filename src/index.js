import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import {BrowserRouter} from "react-router-dom"
import {addPost, state} from "./components/redux/store"


let app = (
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    </React.StrictMode>)


ReactDOM.render(app, document.getElementById('root'));

