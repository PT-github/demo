/*
 * @Author: fenzhou
 * @Date: 2021-05-27 17:05:00
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 16:38:16
 * @Description: 
 */
import md5 from 'js-md5'

/**
 * md5加密
 * @param {string} arg
 * @returns {string}
 */
function useMd5(arg) {
  return md5(arg)
}

export default { useMd5 }
