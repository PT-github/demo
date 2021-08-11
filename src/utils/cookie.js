/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:18
 * @LastEditors: PT
 * @LastEditTime: 2021-08-11 10:01:02
 * @Description: 
 */
import Cookies from 'js-cookie'

function save(key, value) {
  return Cookies.set(key, value)
}
function get(key) {
  return Cookies.get(key)
}
function remove(key) {
  return Cookies.remove(key)
}
export {
  save,
  get,
  remove
}
