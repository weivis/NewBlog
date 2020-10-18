import axios from 'axios'
import { Message } from 'element-ui'
import { HttpRoot } from '@/api/config.js'
import router from '../router'

// 创建axios实例
const service = axios.create({
  baseURL: HttpRoot, // api 的 base_url
  timeout: 50000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // Token验证
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
    if(res.code !== 200){
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    }
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
