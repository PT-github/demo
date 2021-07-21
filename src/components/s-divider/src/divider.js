/*
 * @Author: PT
 * @Date: 2020-10-12 15:32:34
 * @LastEditors: PT
 * @LastEditTime: 2020-10-12 16:18:52
 * @Description: SDivider
 */

import './divider.scss'
export default {
  name: 'SDivider',
  render () {
    return (
      <el-divider ref="divider" class="s-divider" {
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
