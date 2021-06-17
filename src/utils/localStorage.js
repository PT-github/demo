/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:42:03
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:37:48
 * @Description: 本地localStorage存储
 */
export default {
  save: function (key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  },
  get: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  delete: function (key) {
    return localStorage.removeItem(key)
  },
  clear: function () {
    return localStorage.clear()
  }
}
