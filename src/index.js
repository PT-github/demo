/*
 * @Author: PT
 * @Date: 2021-05-27 10:23:12
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 11:17:32
 * @Description: file content
 */
// import 'normalize.css'
import '@/assets/styles/reset.css'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import '@/components'
// import './utils/element-require'

// import './assets/styles/element-variables.scss'

import ElementUI from 'element-ui'
// import '../theme/index.css'
// import '../../element-theme-generator/theme/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// import Button from 'element-ui/packages/button/index'
// import 'element-ui/lib/theme-chalk/button.css'

// import { Button, Select, Option } from 'element-ui'

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// Vue.component(Option.name, Option)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
