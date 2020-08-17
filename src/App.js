import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"

export const App = () =>{
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
                      <Profile/>
                  </div>
              </div>
          </div>
      </div>
  )
}