import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '../layout/Layout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    name: 'home',
    children: [
      {
        path: '/index',
        component: () => import('@/views/Home.vue'),
        meta: {title:'首页'}
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: Layout,
    meta: {title:'文章'},
    children: [
      {
        path: '/',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
        meta: {title:'所有'}
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/article/index.vue'),
        meta: {title:'新增和编辑'}
      }
    ]
  },
  {
    path: '/photograph',
    name: 'photograph',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'photograph',
        component: () => import('@/views/photograph/index.vue'),
        meta: {title:'摄影'}
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router