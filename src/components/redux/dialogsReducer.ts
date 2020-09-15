import {SEND_MESSAGE} from "../../types"

export type initialStateType = typeof initialState

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Vovan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Samurai'},
        {id: 4, name: 'Maria'},
        {id: 5, name: 'Mark'},
        {id: 6, name: 'Sophia'},
        {id: 7, name: 'Lily'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'I like React and u??'},
        {id: 3, message: 'Samurai yoy'},
        {id: 4, message: 'My life my rules'}
    ] as Array<MessageType>
}

export const dialogsReducer = (state = initialState, action: any): initialStateType => {
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

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export let sendMessageCreator = (newMessageBody: string):SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})
