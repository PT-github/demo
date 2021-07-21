/*
 * @Author: PT
 * @Date: 2020-10-12 10:20:28
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:10:22
 * @Description: SDropdownMenu
 */
import './styles/dropdown-menu.scss'
export default {
  name: 'SDropdownMenu',
  render () {
    return (
      <el-dropdown-menu ref="dropdown-menu" class="s-dropdown-menu" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-dropdown-menu>
    )
  }
}
