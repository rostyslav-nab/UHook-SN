import React from "react"
import classes from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog"
import {Message} from "./Message/Message"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../common/FormsControls/FormsControls"
import {maxLengthCreator, requiredFields} from "../../utils/validators/validators"
import {initialStateType} from "../redux/dialogsReducer"

type ownProps = {
    dialogsPage: initialStateType
    sendMessage: (messageText: string) => void
}

export const Dialogs: React.FC<ownProps> = ({dialogsPage, sendMessage}) => {
    let dialogsElements = dialogsPage.dialogs.map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messageElements = dialogsPage.messages.map((message) => <Message message={message.message} key={message.id}/>)

    let addNewMessage = (values: any) => {
        sendMessage(values.newMessageBody)
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

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
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