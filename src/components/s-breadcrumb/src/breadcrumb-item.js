/*
 * @Author: PT
 * @Date: 2020-10-12 10:09:46
 * @LastEditors: PT
 * @LastEditTime: 2020-10-12 10:16:05
 * @Description: SBreadcrumbItem
 */

import './breadcrumb-item.scss'
export default {
  name: 'SBreadcrumbItem',
  render () {
    return (
      <el-breadcrumb-item ref="breadcrumb-item" class="s-breadcrumb-item" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-breadcrumb-item>
    )
  }
}
