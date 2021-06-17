/*
 * @Author: PT
 * @Date: 2021-06-07 09:31:13
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:57:14
 * @Description: file content
 */

// import Vue from 'vue'
// const UITI_FILES = require.context('./', false, /\.js$/)

// UITI_FILES.keys().forEach(filePath => {
//   if (/(?<!\/index\.js)$/.test(filePath)) {
//     const keyArr = filePath.split('/')
//     keyArr.shift() // 移除首项
//     Vue.prototype['$' + keyArr.join('.').replace(/\.js$/g, '')] = UITI_FILES(filePath)
//   }
// })
const UITI_FILES = require.context('./', false, /\.js$/)
const UTILS = {}

UITI_FILES.keys().forEach(filePath => {
  if (/(?<!\/index\.js)$/.test(filePath)) {
    const keyArr = filePath.split('/')
    keyArr.shift() // 移除首项
    UTILS[keyArr.join('.').replace(/\.js$/g, '')] = UITI_FILES(filePath).default
  }
})

export default UTILS
