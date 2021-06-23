/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:18
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 18:59:15
 * @Description: 
 */
import Cookies from 'js-cookie'

function save(key, value) {
  console.log('BBBB')
  return Cookies.set(key, value)
}
function get(key) {
  return Cookies.get(key) + 'AAA'
}
function remove(key) {
  console.log('CCC')
  return Cookies.remove(key)
}
export {
  save,
  get,
  remove
}
