/*
 * @Author: PT
 * @Date: 2020-10-12 10:20:28
 * @LastEditors: PT
 * @LastEditTime: 2021-08-02 10:30:30
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
            ...this.$attrs,
            visibleArrow: false
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
