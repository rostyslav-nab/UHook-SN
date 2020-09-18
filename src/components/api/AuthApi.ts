import {instance , APIResponseType} from "./api"

type MeResponseDataType = {
    email: string
    id: number
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const AuthAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`/auth/me`).then((res) => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
