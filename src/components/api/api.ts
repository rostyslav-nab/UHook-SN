import axios from "axios"
import {UserType} from "../../TSTypes/Types"

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2f5687fa-c8ce-42e6-ac5d-594a3169b38f'
    }
})

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}





