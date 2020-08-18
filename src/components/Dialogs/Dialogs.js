import React from "react"
import classes from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog"
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( (dialog)=> <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/> )
    let messageElements = props.state.messages.map( (message) => <Message message={message.message} key={message.id}/>)

    return (
        <div className={classes.dialogsWrapper}>
            <h1>Dialogs</h1>
            <div className="row">
                <div className="col-4">
                    <div className={classes.dialogs}>
                        <div className={classes.dialogsItem}>
                            {dialogsElements}
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className={classes.messages}>
                        <div className={classes.messagesItem}>
                            {messageElements}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}