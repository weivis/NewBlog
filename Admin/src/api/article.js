import request from '@/utils/request'

export function Getitem(data) {
    return request({
        url: '/article/Get',
        method: 'post',
        data: data
    })
}

export function Queryarticle(data) {
    return request({
        url: '/article/Query',
        method: 'post',
        data: data
    })
}

export function Putchange(data) {
    return request({
        url: '/article/Change',
        method: 'post',
        data: data
    })
}

export function Putarticle(data) {
    return request({
        url: '/article/Put',
        method: 'post',
        data: data
    })
}