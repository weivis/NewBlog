import Vue from 'vue'

import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import '@/permission' // permission control
import '@/styles/main.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')