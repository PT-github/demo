const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../project.config')
const path = require('path')

exports.cssLoaders = function () {

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: config.isDevelopment
    }
  }
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: config.isDevelopment
    }
  }

  function generateLoaders(loader, loaderOptions = {}) {
    const loaders = [
      config.isDevelopment ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
      cssLoader,
      postcssLoader
    ]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: config.isDevelopment
        })
      })
      let ext = loader === 'sass' ? 'scss' : 'less'
      loaders.push({
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, `../src/assets/styles/_variable.${ext}`),
            path.resolve(__dirname, '../src/assets/styles/common/_handle.scss')
          ]
        }
      })
    }
    return loaders
  }
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    less: generateLoaders('less'),
    scss: generateLoaders('sass', {})
  }

}

exports.styleLoaders = function () {
  const output = []
  const loaders = exports.cssLoaders()

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
