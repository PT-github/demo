/*
 * @Author: PT
 * @Date: 2021-07-15 10:59:55
 * @LastEditors: PT
 * @LastEditTime: 2021-07-29 17:30:08
 * @Description: file content
 */
import Vue from 'vue'
import './s-message-box'
import './s-message'
import './s-notification'

const files = require.context('.', true, /^\.\/s-((?!(loading|message|message-box|notification)).)*\/index.js$/)



files.keys().forEach(key => {
  let component = files(key).default
  component && Vue.use(component)
})
