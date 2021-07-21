/*
 * @Author: PT
 * @Date: 2020-09-28 16:11:54
 * @LastEditors: PT
 * @LastEditTime: 2020-10-13 10:03:46
 * @Description: SCard组件
 */
import './card.scss'
export default {
  name: 'SCard',
  render () {
    return (
      <el-card ref="card" class="s-card" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          },
          scopedSlots: {
            ...this.$scopedSlots
          }
        }}>
        { this.$slots.default }
        {
          this.$slots.header && (
            <template slot="header">
              { this.$slots.header }
            </template>
          )
        }
      </el-card>
    )
  }
}
