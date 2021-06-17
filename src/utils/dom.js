/*
 * @Author: fenzhou
 * @Date: 2021-05-27 10:50:51
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 17:04:22
 * @Description: 
 */

/**
 * 检验元素是否包含此class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 给元素增加class
 * @param {HTMLElement} elm
 * @param {string} cls
 */
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * 移除元素上的class
 * @param {HTMLElement} elm
 * @param {string} cls
 */
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export {
  hasClass,
  addClass,
  removeClass
}
