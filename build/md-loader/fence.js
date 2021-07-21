/*
 * @Author: PT
 * @Date: 2021-07-20 10:20:58
 * @LastEditors: PT
 * @LastEditTime: 2021-07-21 10:24:22
 * @Description: 覆盖默认的 fence 渲染策略
 */

const hljs = require('highlight.js')
module.exports = md => {
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/)
    if (token.info && hljs.getLanguage(token.info) && isInDemoContainer) {
      // return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`
      return `<template slot="highlight"><pre v-pre><code class="html">${hljs.highlight(token.content, { language: token.info }).value}</code></pre></template>`
    }
    return defaultRender(tokens, idx, options, env, self)
  }

  md.renderer.rules['table_open'] = function () {
    return '<table class="table-md">'
  }
}
