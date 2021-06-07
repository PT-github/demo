/*
 * @Author: PT
 * @Date: 2021-05-28 16:24:23
 * @LastEditors: PT
 * @LastEditTime: 2021-05-28 16:28:37
 * @Description: file content
 */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin()
  ]
}
