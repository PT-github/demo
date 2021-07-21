/*
 * @Author: PT
 * @Date: 2021-07-15 18:16:25
 * @LastEditors: PT
 * @LastEditTime: 2021-07-19 11:47:25
 * @Description: file content
 */
import '@/assets/styles/reset.css'
import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/color-brewer.css'
import './assets/styles/index.scss'
// 公共UI组件
import '@/components'
// docs公共组件
import './components'
// icon
import icon from './icon.json'

Vue.prototype.$icon = icon

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
