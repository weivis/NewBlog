import Vue from 'vue'
import '@/styles/index.scss' // global css
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import VueLive2d from 'vue-live2d-model'
import '@/permission' // permission control
import 'element-ui/lib/theme-chalk/index.css'
import VueParallaxJs from 'vue-parallax-js'
import Pagination from "@/components/Pagination.vue";
const vueAnimate = require('@/utils/vue-animate')

Vue.config.productionTip = false
Vue.use(vueAnimate)
Vue.use(ElementUI)
Vue.use(VueLive2d)
Vue.use(VueParallaxJs)
Vue.component('Pagination', Pagination)

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
  render: h => h(App)
}).$mount('#app')