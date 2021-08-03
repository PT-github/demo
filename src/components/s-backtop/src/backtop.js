/*
 * @Author: PT
 * @Date: 2020-10-12 15:32:34
 * @LastEditors: PT
 * @LastEditTime: 2021-08-03 15:34:12
 * @Description: SBacktop
 */

import './backtop.scss'
export default {
  name: 'SBacktop',
  render () {
    let isRect = this.$attrs.type === 'rect'
    return (
      <el-backtop ref="backtop"
        class={
          {
            's-backtop': true,
            's-backtop--rect': isRect
          }
        }
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
        { this.$slots.default || <i class={'el-icon-ali-ai-top'}></i>}
      </el-backtop>
    )
  }
}
