import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {store} from './components/redux/redux-store'
import {Provider} from "react-redux"




let app = (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)


ReactDOM.render(app, document.getElementById('root'))




