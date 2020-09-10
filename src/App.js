import React from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {UsersContainer} from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"


export const App = () => {
    return (
        <div className='appWrapper'>
            <div className="row">
                <div className="col-12 header">
                    <HeaderContainer/>
                </div>
                <div className="col-2 navbar">
                    <Navbar/>
                </div>
                <div className="col-10 content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <Login/>}/>
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