/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:31
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 18:54:02
 * @Description: sessionStorage存储
 */

function save(key, value) {
  return sessionStorage.setItem(key, JSON.stringify(value))
}

function get(key) {
  return JSON.parse(sessionStorage.getItem(key))
}

function remove(key) {
  return sessionStorage.removeItem(key)
}

function clear() {
  return sessionStorage.clear()
}
export {
  save,
  get,
  remove,
  clear
}
