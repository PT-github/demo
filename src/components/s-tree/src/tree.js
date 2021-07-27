/*
 * @Author: PT
 * @Date: 2020-10-10 11:04:29
 * @LastEditors: PT
 * @LastEditTime: 2021-07-27 11:01:43
 * @Description: STree
 */

import './tree.scss'
export default {
  name: 'STree',
  render () {
    return (
      <el-tree ref="tree" class="s-tree" {
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
        { this.$slots.default }
      </el-tree>
    )
  },
  methods: {
    filter (...args) {
      this.$refs.tree.filter(...args)
    },
    getNodeKey (...args) {
      return this.$refs.tree.getNodeKey(...args)
    },
    getNodePath (...args) {
      return this.$refs.tree.getNodePath(...args)
    },
    updateKeyChildren (...args) {
      this.$refs.tree.updateKeyChildren(...args)
    },
    getCheckedNodes (...args) {
      return this.$refs.tree.getCheckedNodes(...args)
    },
    setCheckedNodes (...args) {
      this.$refs.tree.setCheckedNodes(...args)
    },
    getCheckedKeys (...args) {
      return this.$refs.tree.getCheckedKeys(...args)
    },
    setCheckedKeys (...args) {
      this.$refs.tree.setCheckedKeys(...args)
    },
    setChecked (...args) {
      this.$refs.tree.setChecked(...args)
    },
    getHalfCheckedNodes (...args) {
      return this.$refs.tree.getHalfCheckedNodes(...args)
    },
    getHalfCheckedKeys (...args) {
      return this.$refs.tree.getHalfCheckedKeys(...args)
    },
    getCurrentKey (...args) {
      return this.$refs.tree.getCurrentKey(...args)
    },
    getCurrentNode (...args) {
      return this.$refs.tree.getCurrentNode(...args)
    },
    setCurrentKey (...args) {
      this.$refs.tree.setCurrentKey(...args)
    },
    setCurrentNode (...args) {
      this.$refs.tree.setCurrentNode(...args)
    },
    getNode (...args) {
      return this.$refs.tree.getNode(...args)
    },
    remove (...args) {
      this.$refs.tree.remove(...args)
    },
    append (...args) {
      this.$refs.tree.append(...args)
    },
    insertBefore (...args) {
      this.$refs.tree.insertBefore(...args)
    },
    insertAfter (...args) {
      this.$refs.tree.insertAfter(...args)
    }
  }
}
