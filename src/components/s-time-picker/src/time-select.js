/*
 * @Author: PT
 * @Date: 2020-10-09 11:02:46
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 17:52:00
 * @Description: STimeSelect
 */
import './time-select.scss'
export default {
  name: 'STimeSelect',
  render () {
    return (
      <el-time-select
        ref="time-select"
        class="s-time-select"
        popper-class="s-time-select-popper"
        visible-arrow={false}
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
      </el-time-select>
    )
  },
  methods: {
    focus () {
      this.$refs['time-select'].focus()
    }
  }
}
