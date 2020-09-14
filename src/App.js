import React, {Suspense, useEffect} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Route, withRouter} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {UsersContainer} from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./components/redux/appReducer"
import {MainLoader} from "./components/common/MainLoader/MainLoader"

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


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
                           render={() => {
                               return <Suspense fallback={<h1>Loading profile...</h1>}>
                                   <ProfileContainer />
                               </Suspense>
                           }}/>
                    <Route path='/dialogs' render={() => {
                        return <Suspense fallback={<h1>Loading profile...</h1>}>
                            <DialogsContainer />
                        </Suspense>
                    }}/>
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