/*
 * @Author: PT
 * @Date: 2021-05-27 08:49:43
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 15:01:50
 * @Description: file content
 */
const path = require('path')
const config = require('./project.config')
const portfinder = require('./build/portfinder')

module.exports = async function () {
  const port = await portfinder.getPortPromise()
  return {
    mode: process.env.ENV_MODE,
    entry: config.entry,
    module: {
      rules: require('./build/loaders')
    },
    resolve: require('./build/resolve'),
    devtool: config.isDevelopment ? 'eval-source-map' : false, // 生产环境不生成source-map
    target: config.isDevelopment ? 'web' : 'browserslist',
    devServer: {
      index: '',
      useLocalIp: true,
      host: '0.0.0.0',
      publicPath: '/',
      port,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      progress: true,
      hot: true,
      disableHostCheck: true,
      // noInfo: true,
      proxy: {
        // '/api': {
        //   target: 'http://localhost:8888',
        //   secure: false,
        //   changeOrigin: true,
        //   pathRewrite: { '^/api': '' }
        // }
      },
      stats: 'errors-only'
    },
    externals: config.externals || {},
    optimization: require('./build/optimization'),
    plugins: require('./build/plugins'),
    output: require('./build/output'),
    // stats: 'errors-warnings'
    // 设置缓存，改善构建速度
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    }
  }
}
