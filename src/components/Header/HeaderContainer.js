import React, {useEffect} from "react"
import {Header} from "./Header"
import * as axios from "axios"
import {connect} from "react-redux"
import {setAuthUserData} from "../redux/authReducer";

const HeaderContainer = (props) => {

    useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if(res.data.resultCode === 0){
                    let {id, email, login} = res.data.data
                    props.setAuthUserData(id, email, login)
                }
            })
    }, [])
    return <Header {...props}/>

}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth, login: state.auth.login})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)