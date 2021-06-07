/*
 * @Author: PT
 * @Date: 2021-05-27 16:39:48
 * @LastEditors: PT
 * @LastEditTime: 2021-05-27 16:40:55
 * @Description: file content
 */
const config = require('../project.config')

// 打包输出配置
let output = config.isDevelopment ? {
  filename: '[name].js',
  path: config.outputDir,
  publicPath: '/'
} : {
  filename: 'js/[name].[hash:7].js',
  path: config.outputDir,
  publicPath: config.publicPath
}

module.exports = output
