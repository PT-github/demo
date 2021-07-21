/*
 * @Author: PT
 * @Date: 2021-07-19 10:09:37
 * @LastEditors: PT
 * @LastEditTime: 2021-07-21 10:02:40
 * @Description: file content
 */
const { slugify } = require('transliteration')
function markdownConf() {
  const wrap = function (render) {
    return function () {
      return render.apply(this, arguments)
        .replace('<code v-pre class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">')
    }
  }
  return {
    raw: true,
    preventExtract: true,
    use: [
      [require('markdown-it-container'), 'demo', {
        validate: function (params) {
          return params.trim().match(/^demo\s*(.*)$/)
        },
        render: function (tokens, index) {
          // console.log('------------------------------')
          // console.log(`----------------${index}--------------`)
          // console.log(JSON.stringify(tokens), index)
          // console.log(`----------------${index}--------------`)
          // console.log('------------------------------')
          let { nesting, info } = tokens[index]
          if (nesting === 1) {
            // 1.获取代码块的描述内容
            let content = info.trim().match(/^demo\s+(.*)$/) || []
            let description = content.length > 1 ? content[1] : ''
            
            var md = require('markdown-it')()
            if (description) {
              description = md.render(description)
            }
            let code = tokens[index + 1].content
            return `
							<demo-code>
								<div class="source" slot="source">${code}</div>
								${description}
								<div class="highlight" slot="highlight">`
          } else {
            return `
							</div>
							</demo-code>\n`
          }
        }
      }],
      [require('markdown-it-container'), 'tip'],
      [require('markdown-it-container'), 'warning'],
      [require('markdown-it-container'), 'danger'],
      [require('markdown-it-emoji')],
      [require('markdown-it-table-of-contents'), {
        includeLevel: [2, 3]
      }],
      [require('markdown-it-anchor'), {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: '¶'
      }],
    ],
    preprocess: function (MarkdownIt, source) {
      MarkdownIt.renderer.rules['table_open'] = function () {
        return '<table class="table-md">'
      }
      MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
      return source
    }
  }
}

module.exports = markdownConf
