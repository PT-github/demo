/*
 * @Author: PT
 * @Date: 2021-05-27 08:49:43
 * @LastEditors: PT
 * @LastEditTime: 2021-07-08 16:25:37
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
      open: false,
      contentBase: path.join(__dirname, 'dist'),
      // 开启gzip压缩 减少服务器压缩gzip时间
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
      stats: {
        normal: true,
        builtAt: true,
        colors: true
      }
    },
    externals: require('./build/externals'),
    optimization: require('./build/optimization'),
    plugins: require('./build/plugins'),
    output: require('./build/output'),
    // stats: 'verbose',
    // 设置缓存，改善构建速度
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
    performance: {
      // 排除第三方插件大小超过250kb限制提示
      assetFilter: function (assetFilename) {
        return !/\/vendor\./.test(assetFilename)
      }
    }
  }
}
