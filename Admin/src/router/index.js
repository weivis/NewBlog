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
    redirect: '/components',
    hidden: true,
    name: 'home',
  },
  {
    path: '/components',
    component: Layout,
    name: 'components',
    children: [
      {
        path: '/index',
        component: () => import('@/views/componentsdata/list.vue'),
        meta: {title:'组件'}
      }
    ]
  },
  {
    path: '/cache',
    component: Layout,
    name: 'cachedata',
    hidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/cache/list.vue'),
        meta: {title:'内容缓存'}
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
        path: '',
        name: 'all',
        component: () => import('@/views/article/list.vue'),
        meta: {title:'所有'}
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/article/edit.vue'),
        meta: {title:'新增和编辑'}
      }
    ]
  },
  {
    path: '/photograph',
    name: 'photograph',
    component: Layout,
    meta: {title:'相册'},
    children: [
      {
        path: 'list',
        name: 'photographall',
        component: () => import('@/views/photograph/list.vue'),
        meta: {title:'全部'}
      },
      {
        path: 'add',
        name: 'photographedit',
        component: () => import('@/views/photograph/add.vue'),
        meta: {title:'上传'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base:'admin',
  routes
})

export default router