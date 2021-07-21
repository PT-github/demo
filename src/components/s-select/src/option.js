/*
 * @Author: PT
 * @Date: 2020-10-09 09:14:58
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:36:29
 * @Description: SOption
 */
import './option.scss'
export default {
  name: 'SOption',
  render () {
    return (
      <el-option class="s-option" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        {
          this.$slots.default
        }
      </el-option>
    )
  }
}
