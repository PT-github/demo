/*
 * @Author: PT
 * @Date: 2020-10-10 11:35:35
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:31:48
 * @Description: SPagination
 */

import './pagination.scss'
export default {
  name: 'SPagination',
  render () {
    return (
      <el-pagination ref="pagination" class="s-pagination" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-pagination>
    )
  }
}
