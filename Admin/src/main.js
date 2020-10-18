import Vue from 'vue'

import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'
import * as auth from './utils/auth'
import '@/permission' // permission control
import '@/styles/main.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$authUser = auth

const whiteList = ['/login','/404', '/index'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    let user = auth.getuser()
    console.log('Token',user)
    if (user) {
      if (!user) {
        if (to.path === '/login') {
          next({ path: '/' })
        } else {
          if (JSON.stringify(to.query || {}) == '{}') {
            next({path: to.path})
          } else {
            next({path: to.path,query: to.query})
          }
        }
      } else {
        if (to.path === '/login') {
          next({ path: '/' })
        } else {
          next()
        }
      }
  
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login`) // 否则全部重定向到登录页
      }
    }
  })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')