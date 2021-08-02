/*
 * @Author: PT
 * @Date: 2020-10-10 09:16:54
 * @LastEditors: PT
 * @LastEditTime: 2021-08-02 17:44:52
 * @Description: SPopover
 */

import './popover.scss'
export default {
  name: 'SPopover',
  computed: {},
  render () {
    return (
      <el-popover ref="popover" class="s-popover" {
        ...{
          attrs: {
            popperClass: 's-popover-popper',
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        {
          this.$slots.default }
        {
          this.$slots.reference && (
            <template slot="reference">
              { this.$slots.reference }
            </template>
          )
        }
      </el-popover>
    )
  }
}
