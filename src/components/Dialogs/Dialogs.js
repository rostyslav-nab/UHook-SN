import React from "react"
import classes from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog"
import {Message} from "./Message/Message"

export const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map( (dialog)=> <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/> )
    let messageElements = state.messages.map( (message) => <Message message={message.message} key={message.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className="row">
                <div className="col-3">
                    <div className={classes.dialogs}>
                        <div className={classes.dialogsItem}>
                            {dialogsElements}
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className={classes.messages}>
                        <div className={classes.messagesItem}>
                            {messageElements}
                        </div>
                        <div>
                            <textarea placeholder='Enter your message' className="form-control" value={newMessageBody} onChange={onNewMessageChange}/>
                        </div>
                        <div>
                            <button className='btn btn-dark' onClick={onSendMessageClick}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}