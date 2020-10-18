import request from '@/utils/request'

export function upload(data) {
    return request({
        url: '/upload/',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}