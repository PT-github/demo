/*
 * @Author: PT
 * @Date: 2021-07-20 10:24:08
 * @LastEditors: PT
 * @LastEditTime: 2021-07-20 16:40:57
 * @Description: file content
 */
const compiler = require('vue-template-compiler')
const transpile = require('vue-template-es2015-compiler')

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n')
}

function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  
  const compiled = compiler.compile(`<div>${template}</div>`)
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    )
  }

  const toFunction = (code) => {
    return `function () {${code}}`
  }

  let code = transpile(`var __render__ = ${toFunction(compiled.render)}\n` +
    `var __staticRenderFns__ = [${compiled.staticRenderFns.map(toFunction)}]`, { transforms: { stripWithFunctional: false } }) + '\nrender._withStripped = true'
  code = code.replace(/\s__(render|staticRenderFns)__\s/g, ' $1 ')
  // todo: 这里采用了硬编码有待改进
  script = script.trim()
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =')
  } else {
    script = 'const democomponentExport = {}'
  }

  let demoComponentContent = `
    ${code}
  `

  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`
  return demoComponentContent
}

module.exports = {
  stripScript,
  stripTemplate,
  stripStyle,
  genInlineComponentText
}
