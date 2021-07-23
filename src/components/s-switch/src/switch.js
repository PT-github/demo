/*
 * @Author: PT
 * @Date: 2020-10-09 10:11:56
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 11:57:28
 * @Description: SSwitch
 */

import './switch.scss'
export default {
  name: 'SSwitch',
  render () {
    return (
      <el-switch
        ref="switch"
        class={
          {
            's-switch': true,
            's-switch--small': this.$attrs.size === 'small'
          }
        }
        size="small"
        width={ this.$attrs.size === 'small' ? 28 : 44 }
        {
          ...{
            attrs: {
              ...this.$attrs
            },
            on: {
              ...this.$listeners
            }
          }
        }
      ></el-switch>
    )
  },
  methods: {
    focus () {
      this.$refs.switch.focus()
    }
  }
}
