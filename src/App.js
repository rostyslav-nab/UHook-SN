import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {upadateNewPostText} from "./components/redux/store";

export const App = (props) =>{
  return(
      <div className='appWrapper'>
          <div className='container'>
              <div className="row">
                  <div className="col-12">
                      <Header/>
                  </div>
                  <div className="col-3">
                      <Navbar/>
                  </div>
                  <div className="col-9">
                      <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage} addPost={props.addPost} upadateNewPostText={upadateNewPostText}/>}/>
                      <Route path='/dialogs' render={ ()=><Dialogs state={props.state.dialogsPage}/>}/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <Footer/>
                  </div>
              </div>
          </div>
      </div>
  )
}