/*
 * @Author: PT
 * @Date: 2021-05-28 17:10:52
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 18:31:56
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
      path: '/test',
      name: 'Test',
      component: () => import(/* webpackChunkName: 'Test' */'@/views/test/test'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'Login' */'@/views/login/login'),
    },
    // {
    //   path: '/login2',
    //   name: 'Login2',
    //   component: () => import(/* webpackChunkName: 'Login2' */'@/views/login/login2'),
    // },
  ]
})
export default router
