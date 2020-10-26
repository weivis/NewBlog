import request from '@/utils/request'

export function Del(data) {
    return request({
        url: '/photograph/Del',
        method: 'post',
        data: data
    })
}

export function Put(data) {
    return request({
        url: '/photograph/Put',
        method: 'post',
        data: data
    })
}

export function Query(data) {
    return request({
        url: '/photograph/Query',
        method: 'post',
        data: data
    })
}