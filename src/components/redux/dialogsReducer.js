import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "../../types"

let initialState = {
    dialogs: [
        {id: 1, name: 'Vovan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Samurai'},
        {id: 4, name: 'Maria'},
        {id: 5, name: 'Mark'},
        {id: 6, name: 'Sophia'},
        {id: 7, name: 'Lily'}
    ],
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'I like React and u??'},
        {id: 3, message: 'Samurai yoy'},
        {id: 4, message: 'My life my rules'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: Date.now(), message: body}]
            }
        default:
            return state
    }
}


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    }
}