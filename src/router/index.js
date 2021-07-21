/*
 * @Author: PT
 * @Date: 2021-05-28 17:10:52
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 16:36:56
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 版本bug
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// import Test from '@/views/test/test'
// import Login from '@/views/login/login'

const router = new Router({
  mode: 'history',
  base: process.env.PUB_PROJECTNAME
    ? '/' + process.env.PUB_PROJECTNAME + '/'
    : '/',
  routes: [
    {
      path: '/user',
      name: 'User',
      component: () => import(/* webpackChunkName: 'User' */'@/views/user/user'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'Login' */'@/views/login/login'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import(/* webpackChunkName: 'button' */'@/views/components/button'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import(/* webpackChunkName: 'alert' */'@/views/components/alert'),
    },
  ]
})
export default router
