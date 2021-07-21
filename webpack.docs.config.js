/*
 * @Author: PT
 * @Date: 2021-05-27 08:49:43
 * @LastEditors: PT
 * @LastEditTime: 2021-07-21 10:17:01
 * @Description: file content
 */
const path = require('path')
const isDevelopment = process.env.ENV_MODE !== 'production'
const portfinder = require('./build/portfinder')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const markdownConf = require('./build/markdown.conf.js')

module.exports = async function () {
  const port = await portfinder.getPortPromise()
  return {
    mode: process.env.ENV_MODE,
    entry: './docs/index.js',
    module: {
      rules: [
        ...require('./build/loaders'),
        {
          test: /\.md$/,
          use: [
            'vue-loader',
            // {
            //   loader: 'vue-markdown-loader/lib/markdown-compiler',
            //   options: markdownConf()
            // }
            path.resolve(__dirname, './build/md-loader/index.js')
          ],
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, './src')
      },
      extensions: [ '.js', '.vue', '.json']
    },
    devtool: isDevelopment ? 'eval-source-map' : false, // 生产环境不生成source-map
    target: isDevelopment ? 'web' : 'browserslist',
    devServer: {
      index: '',
      useLocalIp: true,
      host: '0.0.0.0',
      publicPath: '/',
      port,
      open: false,
      contentBase: path.join(__dirname, 'docs/dist'),
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(), // vue-loader需要
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : 'styles/[name].[hash:7].css',
        chunkFilename: isDevelopment
          ? '[name].css'
          : 'styles/[name].[chunkhash:7].css'
      }),
      new HtmlWebpackPlugin({ // 指定打包的index.html模板
        filename: 'index.html',
        template: path.resolve(__dirname, 'docs/index.html'),
        favicon: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
        inject: true,
        title: ''
      }),
    ],
    output: isDevelopment ? {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs/dist'),
      publicPath: '/'
    } : {
      filename: 'js/[name].[hash:7].js',
      path: path.resolve(__dirname, 'docs/dist'),
      publicPath: '/'
    },
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
