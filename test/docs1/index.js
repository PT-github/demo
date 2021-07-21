/*
 * @Author: PT
 * @Date: 2021-07-15 16:55:20
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 16:57:21
 * @Description: file content
 */
import '@/assets/styles/reset.css'
import Vue from 'vue'
import router from './router'
import App from '@/App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/components'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
