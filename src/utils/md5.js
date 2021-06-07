/*
 * @Author: fenzhou
 * @Date: 2021-05-27 17:05:00
 * @LastEditors: fenzhou
 * @LastEditTime: 2021-05-27 17:32:23
 * @Description: 
 */
import md5 from 'js-md5'

/**
 * md5加密
 * @param {string} arg
 * @returns {string}
 */
export function useMd5(arg) {
  return md5(arg)
}
