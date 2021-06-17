/*
 * @Author: PT
 * @Date: 2021-05-28 17:10:52
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:17:09
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
  ]
})
export default router
