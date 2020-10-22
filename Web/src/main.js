import Vue from 'vue'

import '@/styles/index.scss' // global css
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import VueLive2d from 'vue-live2d-model'
import '@/permission' // permission control

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

const vueAnimate = require('@/utils/vue-animate')

Vue.use(vueAnimate)
Vue.use(ElementUI)
Vue.use(VueLive2d)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')