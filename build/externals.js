/*
 * @Author: PT
 * @Date: 2021-07-08 11:08:48
 * @LastEditors: PT
 * @LastEditTime: 2021-07-08 15:27:33
 * @Description: file content
 */
const config = require('../project.config')

// 外部资源CDN
let { resources, externals = {} } = config
if (resources) {
  let { all = [], [process.env.ENV_CONFIG]: envResource = [] } = resources
  addExternals(getExternals(all))
  addExternals(getExternals(envResource))
}

function addExternals (external) {
  if (Array.isArray(externals)) {
    externals.push(external)
  } else {
    externals = {
      ...externals,
      ...external
    }
  }
}

function getExternals (list) {
  return list.reduce((pre, current) => {
    current.var && current.name && (pre[current.name] = current.var)
    return pre
  }, {})
}

module.exports = externals
