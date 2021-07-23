/*
 * @Author: PT
 * @Date: 2020-10-09 09:09:02
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 09:10:24
 * @Description: SSelect
 */

import './select.scss'
import ElSelect from './main'
export default {
  name: 'SSelect',
  render () {
    return (
      <el-select ref="select" popper-class="s-select-dropdown" class="s-select" {
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
        {
          this.$slots.prefix && (
            <template slot="prefix">
              { this.$slots.prefix }
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
      </el-select>
    )
  },
  methods: {
    focus () {
      this.$refs.select.focus()
    },
    blur () {
      this.$refs.select.blur()
    },
  },
  components: {
    ElSelect
  }
}
