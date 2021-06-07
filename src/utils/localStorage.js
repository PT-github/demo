/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:42:03
 * @LastEditors: fenzhou
 * @LastEditTime: 2021-05-27 11:43:12
 * @Description: 
 */
export const local = {
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
