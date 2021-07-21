/*
 * @Author: PT
 * @Date: 2020-10-12 10:20:28
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:10:36
 * @Description: SDropdown
 */

import './styles/dropdown.scss'
export default {
  name: 'SDropdown',
  render () {
    return (
      <el-dropdown ref="dropdown" class="s-dropdown" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
        {
          this.$slots.dropdown && (
            <template slot="dropdown">
              { this.$slots.dropdown }
            </template>
          )
        }
      </el-dropdown>
    )
  }
}
