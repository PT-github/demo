/*
 * @Author: PT
 * @Date: 2021-05-27 11:48:07
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 19:44:06
 * @Description: file content
 */
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CompressionPlugin = require('compression-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const config = require('../project.config')
const fs = require('fs')

/**
 * 路径下是否包含文件
 * @param {String} filePath 路径
 * @returns {Boolean}
 */
function hasFile(filePath) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    let files = fs.readdirSync(filePath)
    for (let i = 0; i < files.length; i++) {
      let stats = fs.statSync(path.join(filePath, files[i]))
      if (stats.isFile() || hasFile(path.join(filePath, files[i]))) {
        return true
      }
    }
  }
}

// 插件配置
let plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      ENV_CONFIG: '"' + config.env + '"',
      PUB_PROJECTNAME: config.isDevelopment ? '""' : '"' + config.pubProjectName + '"'
    }
  }),
  new VueLoaderPlugin(), // vue-loader需要
  new HtmlWebpackPlugin({ // 指定打包的index.html模板
    filename: 'index.html',
    template: path.resolve(config.projectRoot, 'index.html'),
    favicon: path.resolve(config.projectRoot, 'src/assets/images/favicon.ico'),
    inject: true,
    title: ''
  }),
  new ESLintPlugin({
    extensions: ['.js', '.vue'],
    failOnError: false
  })
]
// 生产环境 添加的plugin
let prodPlugins = [
  // 清空打包目录
  new CleanWebpackPlugin(),
  // css抽离
  new MiniCssExtractPlugin({
    filename: config.isDevelopment ? '[name].css' : 'styles/[name].[hash:7].css',
    chunkFilename: config.isDevelopment
      ? '[name].css'
      : 'styles/[name].[chunkhash:7].css'
  }),
  // gzip压缩
  new CompressionPlugin({
    filename: '[path][base].gz',
  })
]
// 判断public目录下是否有文件
if (hasFile(path.resolve(config.projectRoot, 'public'))) {
  plugins.push(new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(config.projectRoot, 'public'),
        to: path.resolve(config.outputPath, 'public')
      }
    ]
  }))
}

if (!config.isDevelopment) {
  plugins.push(...prodPlugins)
}
module.exports = plugins
