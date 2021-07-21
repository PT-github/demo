/*
 * @Author: PT
 * @Date: 2021-07-15 16:56:03
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 17:05:19
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


// import Vue from 'vue'
// const files = require.context('../views', true, /^\.\/s-((?!(loading|message|message-box|notification)).)*\/index.js$/)

// files.keys().forEach(key => {
//   let component = files(key).default
//   component && Vue.component(component.name, component)
// })

const router = new Router({
  mode: 'history',
  base: process.env.PUB_PROJECTNAME
    ? '/' + process.env.PUB_PROJECTNAME + '/'
    : '/',
  routes: [
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: () => import(/* webpackChunkName: 'User' */'@/views/user/user'),
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import(/* webpackChunkName: 'Login' */'@/views/login/login'),
    // },
    // {
    //   path: '/button',
    //   name: 'button',
    //   component: () => import(/* webpackChunkName: 'button' */'@/views/components/button'),
    // },
    // {
    //   path: '/alert',
    //   name: 'alert',
    //   component: () => import(/* webpackChunkName: 'alert' */'@/views/components/alert'),
    // },
  ]
})
export default router
