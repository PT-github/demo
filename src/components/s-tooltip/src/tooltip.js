/*
 * @Author: PT
 * @Date: 2020-10-12 11:21:49
 * @LastEditors: PT
 * @LastEditTime: 2021-08-02 15:12:56
 * @Description: STooltip
 */

import './tooltip.scss'
export default {
  name: 'STooltip',
  render () {
    return (
      <el-tooltip ref="tooltip"
        class="s-tooltip"
        {
          ...{
            attrs: {
              popperClass: 's-tooltip-popper',
              ...this.$attrs
            },
            on: {
              ...this.$listeners
            }
          }
        }
      >
        { this.$slots.default }
        {
          this.$slots.content && (
            <template slot="content">
              { this.$slots.content }
            </template>
          )
        }
      </el-tooltip>
    )
  }
}
