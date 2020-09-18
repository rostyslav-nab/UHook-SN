import {PhotosType, ProfileType} from "../../TSTypes/Types"
import {instance, APIResponseType} from "./api"

type SavePhotoResDataType = {
    photos: PhotosType
}

export const ProfileAPI = {
    getProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`)
            .then(res => res.data)
    },
    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status/`, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const PhotoData = new FormData()
        PhotoData.append('image', photoFile)
        return instance.put<APIResponseType<SavePhotoResDataType>>(`profile/photo/`, PhotoData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile/`, profile)
            .then(res => res.data)
    }
}
