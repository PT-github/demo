/*
 * @Author: PT
 * @Date: 2020-10-10 10:53:08
 * @LastEditors: PT
 * @LastEditTime: 2021-07-27 08:39:33
 * @Description: SProgress
 */

import './progress.scss'
export default {
  name: 'SProgress',
  render () {
    return (
      <el-progress ref="progress"
        class="s-progress"
        stroke-width={8}
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
      </el-progress>
    )
  }
}
