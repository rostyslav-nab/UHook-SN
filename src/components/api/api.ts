import axios from "axios"
import {ProfileType} from "../../TSTypes/Types"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2f5687fa-c8ce-42e6-ac5d-594a3169b38f'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> response.data)
    },
    follow(id: number){
        return instance.post(`follow/${id}`)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`)
    },
    getProfile(id: number){
        console.warn('Obsolete method. Please profileAPI object.')
        return ProfileAPI.getProfile(id)
    }
}

export const ProfileAPI = {
    getProfile(id: number){
        return instance.get(`profile/${id}`)
    },
    getStatus(id: number){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: any){
        const PhotoData = new FormData()
        PhotoData.append('image', photoFile)
        return instance.put(`profile/photo/`, PhotoData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType){
        return instance.put(`profile/`, profile)
    }
}


export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}


type MyResponseType = {
    data: {
        email: string
        id: number
        login: string
    }
    resultCode: ResultCodesEnum
    message: Array<string>
}

type LoginResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {
        userId: number
    }
}

export const AuthAPI = {
    me(){
        return instance.get<MyResponseType>(`/auth/me`).then((res)=> res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null){
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const SecurityAPI = {
    getCaptchaUrl(){
        return instance.get(`/security/get-captcha-url`)
    }
}



