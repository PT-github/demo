/*
 * @Author: PT
 * @Date: 2021-05-31 08:41:58
 * @LastEditors: PT
 * @LastEditTime: 2021-05-31 08:42:22
 * @Description: file content
 */
import Vue from 'vue'
const config = require(`./${process.env.ENV_CONFIG}.js`).default
Vue.prototype.$config = config
export default config
