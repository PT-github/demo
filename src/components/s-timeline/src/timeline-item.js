/*
 * @Author: PT
 * @Date: 2020-09-28 16:11:54
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 16:15:51
 * @Description: STimelineItem组件
 */
import './timeline-item.scss'
export default {
  name: 'STimelineItem',
  render () {
    return (
      <el-timeline-item ref="timeline-item" class="s-timeline-item" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
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
