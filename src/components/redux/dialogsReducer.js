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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: body}]
            }
        default:
            return state
    }
}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}
