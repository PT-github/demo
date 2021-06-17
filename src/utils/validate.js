/*
 * @Author: fenzhou
 * @Date: 2021-05-27 10:51:03
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:41:39
 * @Description: 
 */


/**
 * @param {string} path
 * @returns {Boolean}
 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 是否是URL
 * @param {string} url
 * @returns {Boolean}
 */
function isURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 是否是邮箱
 * @param {string} email
 * @returns {Boolean}
 */
function isEmail(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
  * 手机号码
  * @param {*} arg
  * @returns {Boolean}
  */
function isMobile(arg) {
  return /^1[3456789]\d{9}$/.test(arg)
}

/**
  * 电话号码
  * @param {*} arg
  * @returns {Boolean}
  */
function isPhone(arg) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(arg)
}

/**
 * 是否全为小写
 * @param {string} str
 * @returns {Boolean}
 */
function isLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 是否全为大写
 * @param {string} str
 * @returns {Boolean}
 */
function isUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 是否全是字母
 * @param {string} str
 * @returns {Boolean}
 */
function isAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 字符串校验
 * @param {string} str
 * @returns {Boolean}
 */
function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * 数组校验
 * @param {Array} arg
 * @returns {Boolean}
 */
function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 整数校验
 * @param {Number} arg
 * @returns {Boolean}
 */
function isNumber(arg) {
  return /^[1-9]\d*$/.test(arg)
}

/**
 * 金额校验
 * @param {*} arg
 * @returns {Boolean}
 */
function isPrice(arg) {
  return /^\d{0,6}$/.test(arg)
}

/**
 * 统一社会信用代码
 * @param {*} arg
 * @returns {Boolean}
 */
function isCreditCode(arg) {
  return /^[A-Z0-9]+$/.test(arg)
}

/**
 * IP验证
 * @param {*} arg
 * @returns {Boolean}
 */
function isIP(arg) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(arg)
}

/**
 * 中文验证
 * @param {*} arg
 * @returns {Boolean}
 */
function isChinese(arg) {
  return /^[\u4E00-\u9FA5]+$/.test(arg)
}

/**
 * 身份证验证
 * @param {*} arg
 * @returns {Boolean}
 */
function isIDCard(arg) {
  return /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/.test(arg)
}

export default {
  isExternal,
  isURL,
  isEmail,
  isMobile,
  isPhone,
  isLowerCase,
  isUpperCase,
  isAlphabets,
  isString,
  isArray,
  isNumber,
  isPrice,
  isCreditCode,
  isIP,
  isChinese,
  isIDCard
}
