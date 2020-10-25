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
    navname:'首页',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      }
    ]
  },
  {
    path: '/opus',
    component: Layout,
    navname:'TA的作品',
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
    navname: '工作',
    hidden: true,
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
    navname: '项目创作',
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
    navname: '技术文章',
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
    navname: '摄影',
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
    path: '/content/:id',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/',
        name: 'content',
        component: () => import('@/views/content/index.vue'),
        meta: {title:'内容'}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router