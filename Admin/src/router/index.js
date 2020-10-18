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
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        // meta: {title:'首页'}
      }
    ]
  },
  {
    path: '/opus',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'opus',
        component: () => import('@/views/opus/index.vue'),
        meta: {title:'TA的作品'}
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'work',
        component: () => import('@/views/work/index.vue'),
        meta: {title:'工作'}
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'project',
        component: () => import('@/views/project/index.vue'),
        meta: {title:'项目创作'}
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
        meta: {title:'文章'}
      }
    ]
  },
  {
    path: '/photograph',
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
    path: '/content',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'content',
        component: () => import('@/views/content/index.vue'),
        meta: {title:'内容'}
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router