/*
 * @Author: PT
 * @Date: 2020-09-28 16:11:54
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 16:15:59
 * @Description: STimeline组件
 */
import './timeline.scss'
export default {
  name: 'STimeline',
  render () {
    return (
      <el-timeline ref="timeline" class="s-timeline" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-timeline>
    )
  }
}
