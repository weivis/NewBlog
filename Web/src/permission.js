import router from './router'

router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title + ' - WeiVi(唯酱)的个人网站主页'
    }
    next()
  })