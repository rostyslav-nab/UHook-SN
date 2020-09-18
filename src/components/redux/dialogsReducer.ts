import {InferActionsType} from "./redux-store"

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

export const dialogsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: body}]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

type ActionsTypes = InferActionsType<typeof actions>
