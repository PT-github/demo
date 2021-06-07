/*
 * @Author: PT
 * @Date: 2021-06-07 09:31:13
 * @LastEditors: PT
 * @LastEditTime: 2021-06-07 17:17:47
 * @Description: file content
 */

import Vue from 'vue'
const UITI_FILES = require.context('./', false, /\.js$/)

UITI_FILES.keys().forEach(filePath => {
  if (/(?<!\/index\.js)$/.test(filePath)) {
    const keyArr = filePath.split('/')
    keyArr.shift() // 移除首项
    Vue.prototype['$' + keyArr.join('.').replace(/\.js$/g, '')] = UITI_FILES(filePath)
  }
})
