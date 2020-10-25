import Vue from 'vue'

import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import {getuser} from '@/utils/auth'
import '@/permission' // permission control
import '@/styles/main.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)



const whiteList = ['/login','/404', '/index'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    let user = getuser()
    console.log('Token',user)
    if (user) {
      if (!user) {
        if (to.path === '/login') {
          router.push({ name: "login", params: { msg: "登录失效" } })
        } else {
          if (JSON.stringify(to.query || {}) == '{}') {
            next({path: to.path})
          } else {
            next({path: to.path,query: to.query})
          }
        }
      } else {
        if (to.path === '/login') {
          router.push({ name: "home" })
        } else {
          next()
        }
      }
  
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        router.push({ name: "login", params: { msg: "登录失效" } })
      }
    }
  })

Object.defineProperty(Vue.prototype, '$http', {
  value: function(requestPromise, successCallback) {
    requestPromise.then(res => {
      if (!res) return
      successCallback && successCallback(res)
    })
  }
})
  

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')