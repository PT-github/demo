/*
 * @Author: PT
 * @Date: 2020-10-12 15:32:34
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:18:03
 * @Description: SImage
 */

import './image.scss'
export default {
  name: 'SImage',
  render () {
    return (
      <el-image ref="image" class="s-image" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.placeholder && (
          <template slot="placeholder">
            { this.$slots.placeholder }
          </template>
        )
        }
        { this.$slots.error && (
          <template slot="error">
            { this.$slots.error }
          </template>
        )
        }
      </el-image>
    )
  }
}
