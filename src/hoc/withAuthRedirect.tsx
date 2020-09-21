import React from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {AppStateType} from "../components/redux/redux-store"

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<WCP>(Component: React.ComponentType<WCP>){
    const RedirectComponent: React.FC<MapPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as WCP}/>

    }

    let ConnectAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent

}