/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:31
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:38:46
 * @Description: sessionStorage存储
 */

export default {
  save: function (key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value))
  },
  get: function (key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  delete: function (key) {
    return sessionStorage.removeItem(key)
  },
  clear: function () {
    return sessionStorage.clear()
  }
}
