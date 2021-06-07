/*
 * @Author: PT
 * @Date: 2021-05-27 16:45:44
 * @LastEditors: PT
 * @LastEditTime: 2021-05-28 11:06:07
 * @Description: file content
 */
const path = require('path')
const config = require('../project.config')

let { alias = {}, extensions = [] } = config.resolve || {}

module.exports = {
  alias: {
    vue$: 'vue/dist/vue.runtime.esm.js',
    '@': path.resolve(__dirname, '../src'),
    ...alias
  },
  extensions: [...extensions, '.js', '.vue', '.json']
}
