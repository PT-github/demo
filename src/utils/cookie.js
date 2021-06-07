/*
 * @Author: fenzhou
 * @Date: 2021-05-27 11:41:18
 * @LastEditors: fenzhou
 * @LastEditTime: 2021-05-27 15:27:03
 * @Description: 
 */
import Cookies from 'js-cookie'

export const cookie = {
  save: function(key, value)  {
    return Cookies.set(key, value)
  },
  get: function (key) {
    return Cookies.get(key)
  },
  delete: function(key) {
    return Cookies.remove(key)
  }
}
