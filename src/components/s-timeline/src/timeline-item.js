/*
 * @Author: PT
 * @Date: 2020-09-28 16:11:54
 * @LastEditors: PT
 * @LastEditTime: 2021-08-02 18:35:07
 * @Description: STimelineItem组件
 */
import './timeline-item.scss'
export default {
  name: 'STimelineItem',
  render () {
    let className = ''
    if (this.$attrs.icon || this.$attrs.color || this.$attrs.type) {
      className = 's-timeline-item-custom'
    }
    return (
      <el-timeline-item
        ref="timeline-item"
        class={ [ 's-timeline-item', className ] }
        {
          ...{
            attrs: {
              ...this.$attrs
            },
            on: {
              ...this.$listeners
            }
          }
        }>
        { this.$slots.default }
        { this.$slots.dot && (
          <template slot="dot">
            { this.$slots.dot }
          </template>
        )
        }
      </el-timeline-item>
    )
  }
}
