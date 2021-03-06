import axios from 'axios'
import { Message } from 'element-ui'
// import { HttpRoot } from '@/api/config'
// import router from '../router'
// import {logout, getuser} from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.weivird.com/api', // api 的 base_url
  timeout: 50000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
