/*
 * @Author: PT
 * @Date: 2020-10-09 10:53:33
 * @LastEditors: PT
 * @LastEditTime: 2021-08-04 17:55:00
 * @Description: STimePicker
 */


import './time-picker.scss'
export default {
  name: 'STimePicker',
  render () {
    return (
      <el-time-picker
        ref="time-picker"
        class="s-time-picker"
        popper-class="s-time-picker-popper"
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
      >
        {
          this.$slots['range-separator'] && (
            <template slot="range-separator">
              { this.$slots['range-separator'] }
            </template>
          )
        }
      </el-time-picker>
    )
  },
  methods: {
    focus () {
      this.$refs['time-picker'].focus()
    }
  }
}
