import React from "react"
import {Header} from "./Header"
import {connect} from "react-redux"
import {logout} from "../redux/authReducer"

const HeaderContainer = (props) => {
    return <Header {...props}/>

}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth, login: state.auth.login})

export default connect(mapStateToProps, {logout})(HeaderContainer)