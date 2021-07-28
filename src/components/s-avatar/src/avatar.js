/*
 * @Author: PT
 * @Date: 2020-10-10 11:45:26
 * @LastEditors: PT
 * @LastEditTime: 2021-07-27 16:49:23
 * @Description: SAvatar
 */

import './avatar.scss'
export default {
  name: 'SAvatar',
  render () {
    return (
      <el-avatar ref="avatar"
        class={
          {
            's-avatar': true,
            's-avatar--primary': this.$attrs.type === 'primary'
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
        { this.$slots.default }
      </el-avatar>
    )
  }
}
