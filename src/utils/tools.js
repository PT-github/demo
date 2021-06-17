/*
 * @Author: fenzhou
 * @Date: 2021-05-27 17:04:54
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:39:48
 * @Description: 
 */
/**
 * 各种时间格式转换成规定string  parseTime(new Date(), '{y}.{m}.{d}')
 * Created by PanJiaChen
 * @param {(Object|string|number)} time
 * @param {string} cFormat '{y}.{m}.{d}'
 * @returns {string | null}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}

/**
 * 
 * 常用于信息发布后的时间显示，“刚刚、3分钟前、2021.5.28 15:00:00”
 * @param {number} time
 * @param {string} option '{y}.{m}.{d}'
 * @returns {string}
 */
function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 字符长度计算
 * @param {string} input value
 * @returns {number} output value
 */
function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 1
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * 合并两个对象
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * 数组去重
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

export default {
  parseTime,
  formatTime,
  byteLength,
  objectMerge,
  uniqueArr
}
