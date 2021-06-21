/*
 * @Author: PT
 * @Date: 2021-05-27 10:23:03
 * @LastEditors: PT
 * @LastEditTime: 2021-06-21 10:57:20
 * @Description: file content
 */
const path = require('path')
const isDevelopment = process.env.ENV_MODE !== 'production'
console.log('==============打包模式：', process.env.ENV_MODE, '==============')
const outputDir = path.resolve(__dirname, 'dist')

let config = {

  pubProjectName: '', // 如果按照域名+项目名访问 此处填写对应的项目名称

  env: process.env.ENV_CONFIG, // 环境变量

  isDevelopment, // 是否打包成开发模式

  entry: ['./src/index.js'], // 入口js

  staticPath: isDevelopment ? '' : 'assets', // 项目的静态文件路径

  outputDir, // 所有输出文件的目标路径

  publicPath: '/', // 输出解析文件的目录，url 相对于 HTML 页面

  projectRoot: path.resolve(__dirname, './'), // 项目根目录

  externals: {}, // 外部扩展，不需要打包

  compress: true // 是否开启gzip压缩（开启可以减少服务器压力-压缩gizp时间，但是会增加构建时间）

}
config.publicPath += (config.pubProjectName ? config.pubProjectName + '/' : '')
config.outputPath = path.resolve(config.projectRoot, config.outputDir) // 输出的目录路径

module.exports = config
