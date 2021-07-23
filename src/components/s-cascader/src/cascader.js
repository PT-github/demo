/*
 * @Author: PT
 * @Date: 2020-10-09 09:45:10
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 11:11:53
 * @Description: SCascader组件
 */

import './cascader.scss'
export default {
  name: 'SCascader',
  render () {
    return (
      <el-cascader ref="cascader" popperClass="s-cascader-dropdown" class="s-cascader" {
        ...{
          attrs: {
            ...this.$attrs
          },
          on: {
            ...this.$listeners
          },
          scopedSlots: {
            ...this.$scopedSlots
          }
        }}>
        {
          this.$slots.suffix && (
            <template slot="suffix">
              { this.$slots.suffix }
            </template>
          )
        }
        {
          this.$slots.empty && (
            <template slot="empty">
              { this.$slots.empty }
            </template>
          )
        }
        
      </el-cascader>
    )
  },
  methods: {
    getCheckedNodes () {
      return this.$refs.cascader.getCheckedNodes()
    }
  }
}
