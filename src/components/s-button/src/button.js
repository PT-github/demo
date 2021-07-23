/*
 * @Author: PT
 * @Date: 2020-09-29 22:03:42
 * @LastEditors: PT
 * @LastEditTime: 2021-07-21 15:25:06
 * @Description: SButton
 */
import './button.scss'
export default {
  name: 'SButton',
  render () {
    return (
      <el-button class="s-button" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}
      >
        {this.$slots.default}
      </el-button>
    )
  }
}
