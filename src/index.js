import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {BrowserRouter} from "react-router-dom"
import {store} from './components/redux/redux-store'
import {Provider} from "react-redux"



let app = (state) =>{
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}


let rerenderEntireTree = (state) => {
    ReactDOM.render(app(state), document.getElementById('root'))
}




rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})



