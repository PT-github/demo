/*
 * @Author: PT
 * @Date: 2021-07-15 10:59:55
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 11:02:37
 * @Description: file content
 */
import Vue from 'vue'
const files = require.context('.', true, /^\.\/s-((?!(loading|message|message-box|notification)).)*\/index.js$/)

files.keys().forEach(key => {
  let component = files(key).default
  component && Vue.component(component.name, component)
})
