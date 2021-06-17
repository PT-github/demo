/*
 * @Author: PT
 * @Date: 2021-05-27 10:23:12
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 18:27:56
 * @Description: file content
 */
import 'normalize.css'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
// import { addClass } from './utils/dom'
// import './utils'

// console.log(addClass, '====')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
