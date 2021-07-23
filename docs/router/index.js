/*
 * @Author: PT
 * @Date: 2021-07-15 18:23:26
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 12:05:01
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const VIEW_FILES = require.context('../views', false, /\.md$/)
const ROUTER_VIEWS = []
VIEW_FILES.keys().forEach(filePath => {

  let name = filePath.split('/').pop().split('.')[0]
  ROUTER_VIEWS.push({
    path: `/${name}`,
    name: name,
    component: () => import(`../views/${name}.md`),
  })
})
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import(/* webpackChunkName: 'button' */'../components/layout.vue'),
      children: [
        ...ROUTER_VIEWS
        // {
        //   path: '/button',
        //   name: 'button',
        //   component: () => import(/* webpackChunkName: 'button' */'../views/button.md'),
        // },
      ]
    },
    // {
    //   path: '/layout',
    //   name: 'layout',
    //   component: () => import(/* webpackChunkName: 'layout' */'../views/layout.md'),
    // },
  ]
})
export default router
