import axios from 'axios'
import { Message } from 'element-ui'
// import { HttpRoot } from '@/api/config'
import router from '../router'
import {logout, getuser} from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8080', // api 的 base_url
  timeout: 50000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    var Authorization = getuser();
    if (Authorization) {
      config.headers['Token'] = Authorization // 让每个请求携带自定义token 请根据实际情况自行修改
    }
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
    if(res.code == 10086){
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      logout()
      setTimeout(()=>{
        router.push({ name: "home" })
      },1500);
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
