/*
 * @Author: PT
 * @Date: 2021-05-27 10:23:12
 * @LastEditors: PT
 * @LastEditTime: 2021-06-07 09:33:20
 * @Description: file content
 */
import 'normalize.css'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import './utils'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
