import React from "react"
import classes from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog"
import {Message} from "./Message/Message"
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../common/FormsControls/FormsControls"
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators"

export const Dialogs = ({dialogsPage, sendMessage, isAuth}) => {
    let dialogsElements = dialogsPage.dialogs.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messageElements = dialogsPage.messages.map((message) => <Message message={message.message} key={message.id}/>)

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
    }

    if (!isAuth) {
        return <Redirect to={'/login'}/>
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
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ------------------  ReduxForm  -----------------------

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredFields, maxLength100]} name={'newMessageBody'} placeholder='Enter your message' className="form-control"/>
            </div>
            <div>
                <button className='btn btn-dark'>Send Message</button>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)