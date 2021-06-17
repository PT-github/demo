/*
 * @Author: PT
 * @Date: 2021-05-28 16:24:23
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 15:40:57
 * @Description: file content
 */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin()
  ],
  splitChunks: {
    chunks: 'all', // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      // 抽离第三方插件
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        name: 'vendor',
        reuseExistingChunk: true,
      },
      // 抽离自定义工具库
      common: {
        name: 'common',
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    }
  }
}
