/*
 * @Author: PT
 * @Date: 2020-10-12 15:04:40
 * @LastEditors: PT
 * @LastEditTime: 2021-08-03 09:44:10
 * @Description: SCollapseItem
 */
import './collapse-item.scss'
export default {
  name: 'SCollapseItem',
  render () {
    return (
      <el-collapse-item ref="collapse-item" class="s-collapse-item" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
        { this.$slots.title && (
          <template slot="title">
            <div class="collapse-item__title">{ this.$slots.title }</div>
          </template>
        )
        }
      </el-collapse-item>
    )
  }
}
