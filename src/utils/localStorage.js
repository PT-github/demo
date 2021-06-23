/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:42:03
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 18:52:55
 * @Description: 本地localStorage存储
 */

function save(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

function get(key) {
  return JSON.parse(localStorage.getItem(key))
}

function remove(key) {
  return localStorage.removeItem(key)
}

function clear() {
  return localStorage.clear()
}
export {
  save,
  get,
  remove,
  clear
}
