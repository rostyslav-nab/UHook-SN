import React from "react"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"

export const DialogsContainer = (props) => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={props.store.getState().dialogsPage}/>
    )
}