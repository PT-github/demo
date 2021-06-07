/*
 * @Author: PT
 * @Date: 2021-06-07 11:24:41
 * @LastEditors: PT
 * @LastEditTime: 2021-06-07 11:39:59
 * @Description: file content
 */
const portfinder = require('portfinder')

portfinder.basePort = 8080    // default: 8000
portfinder.highestPort = 65535 // default: 65535

module.exports = portfinder
