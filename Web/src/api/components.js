import request from '@/utils/request'

export function Query(data) {
    return request({
        url: '/components/Query',
        method: 'post',
        data: data
    })
}

export function Del(data) {
    return request({
        url: '/components/Del',
        method: 'post',
        data: data
    })
}

export function Put(data) {
    return request({
        url: '/components/Put',
        method: 'post',
        data: data
    })
}
