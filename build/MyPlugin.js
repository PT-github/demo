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
            if (envResource && envResource.length) {
              let { paths = [], styles = []} = this.getResource(envResource)
              data.assets.js = paths && paths.length > 0 ? paths.concat(data.assets.js) : data.assets.js
              data.assets.css = styles && styles.length > 0 ? styles.concat(data.assets.css) : data.assets.css
            }

            let all = options.all || []
            if (all && all.length) {
              let { paths = [], styles = []} = this.getResource(all)
              data.assets.js = paths && paths.length > 0 ? paths.concat(data.assets.js) : data.assets.js
              data.assets.css = styles && styles.length > 0 ? styles.concat(data.assets.css) : data.assets.css
            }
          }
          cb(null, data)
        }
      )
    })
  }

  getResource (list) {
    return list.reduce((pre, current) => {
      current.path && pre.paths.push(current.path)
      current.paths && current.paths.length && pre.paths.push(...current.paths)

      current.style && pre.styles.push(current.style)
      current.styles && current.styles.length && pre.styles.push(...current.styles)
      return pre
    }, { paths: [], styles: [] })
  }
}

module.exports = MyPlugin
