/*
 * @Author: PT
 * @Date: 2020-10-12 15:32:34
 * @LastEditors: PT
 * @LastEditTime: 2021-08-03 10:04:55
 * @Description: SDivider
 */

import './divider.scss'
export default {
  name: 'SDivider',
  render () {
    return (
      <el-divider ref="divider" staticClass="s-divider" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-divider>
    )
  }
}
