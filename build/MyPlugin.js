const HtmlWebpackPlugin = require('html-webpack-plugin')

class MyPlugin {
  constructor (options) {
    this.options = options || {}
  }
  apply (compiler) {
    compiler.hooks.compilation.tap('MyPlugin', compilation => {

      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        'MyPlugin',
        (data, cb) => {
          let options = this.options

          if (options) {
            let envResource = options[process.env.ENV_CONFIG]
            if (envResource) {
              data.assets.js = envResource.js && envResource.js.length > 0 ? envResource.js.concat(data.assets.js) : data.assets.js
              data.assets.css = envResource.css && envResource.css.length > 0 ? envResource.css.concat(data.assets.css) : data.assets.css
            }

            let all = options.all
            if (all) {
              data.assets.js = all.js && all.js.length > 0 ? all.js.concat(data.assets.js) : data.assets.js
              data.assets.css = all.css && all.css.length > 0 ? all.css.concat(data.assets.css) : data.assets.css
            }
          }
          cb(null, data)
        }
      )
    })
  }
}

module.exports = MyPlugin
