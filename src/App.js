import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {UsersContainer} from "./components/Users/UsersContainer";


export const App = (props) => {
    return (
        <div className='appWrapper'>
            <div className="row">
                <div className="col-12 header">
                    <Header/>
                </div>
                <div className="col-2 navbar">
                    <Navbar/>
                </div>
                <div className="col-10 content">
                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer/>
                </div>
            </div>

        </div>
    )
}