import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/home'
// import City from '@/pages/city/city'
// import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home1',
      // component: Home
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
