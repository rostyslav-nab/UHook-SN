import React, {useEffect} from "react"
import {Header} from "./Header"
import {connect} from "react-redux"
import {getAuthUserData, logout} from "../redux/authReducer"

const HeaderContainer = (props) => {

    useEffect(()=> {
        props.getAuthUserData()
    }, [])
    return <Header {...props}/>

}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth, login: state.auth.login})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)