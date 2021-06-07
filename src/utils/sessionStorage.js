/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:31
 * @LastEditors: fenzhou
 * @LastEditTime: 2021-05-27 15:23:31
 * @Description: 
 */

export const session = {
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
