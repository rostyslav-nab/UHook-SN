import React, {useEffect} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Route, withRouter} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {UsersContainer} from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./components/redux/appReducer"
import {MainLoader} from "./components/common/MainLoader/MainLoader"


const App = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, [])


    if (!props.initialized) {
        return <MainLoader/>
    }

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
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
            <div className="navbar-fixed-bottom row-fluid">
                <footer className="navbar-inner">
                    <div className="container">
                        <Footer/>
                    </div>
                </footer>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)