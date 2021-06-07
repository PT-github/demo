/*
 * @Author: PT
 * @Date: 2021-05-27 15:53:26
 * @LastEditors: PT
 * @LastEditTime: 2021-05-27 16:36:08
 * @Description: file content
 */

const fs = require('fs')

const path = require('path')

let filePath = path.resolve('./', 'public')

function hasFile(filePath) {
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    let files = fs.readdirSync(filePath)
    for (let i = 0; i < files.length; i++) {
      let stats = fs.statSync(path.join(filePath, files[i]))
      if (stats.isFile() || hasFile(path.join(filePath, files[i]))) {
        return true
      }
    }
  }
}
console.log(hasFile(filePath))
