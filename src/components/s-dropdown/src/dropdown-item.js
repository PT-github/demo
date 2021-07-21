/*
 * @Author: PT
 * @Date: 2020-10-12 10:20:28
 * @LastEditors: PT
 * @LastEditTime: 2020-10-12 10:24:08
 * @Description: SDropdownItem
 */

import './styles/dropdown-item.scss'
export default {
  name: 'SDropdownItem',
  render () {
    return (
      <el-dropdown-item ref="dropdown-item" class="s-dropdown-item" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-dropdown-item>
    )
  }
}
