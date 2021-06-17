/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:18
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:33:44
 * @Description: 
 */
import Cookies from 'js-cookie'

export default {
  save: function (key, value) {
    return Cookies.set(key, value)
  },
  get: function (key) {
    return Cookies.get(key)
  },
  delete: function (key) {
    return Cookies.remove(key)
  }
}
