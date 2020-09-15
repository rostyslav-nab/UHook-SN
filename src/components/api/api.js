import axios from "axios"

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
    follow(id){
        return instance.post(`follow/${id}`)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
    },
    getProfile(id){
        console.warn('Obsolete method. Please profileAPI object.')
        return ProfileAPI.getProfile(id)
    }
}

export const ProfileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile){
        const PhotoData = new FormData()
        PhotoData.append('image', photoFile)
        return instance.put(`profile/photo/`, PhotoData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile/`, profile)
    }
}

export const AuthAPI = {
    me(){
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
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



