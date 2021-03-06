/*
 * @Author: PT
 * @Date: 2020-10-09 15:42:03
 * @LastEditors: PT
 * @LastEditTime: 2021-07-26 11:18:17
 * @Description: SRate
 */
import './rate.scss'
export default {
  name: 'SRate',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  computed: {
    paddingTop () {
      if (!this.elFormItem) {
        return
      }
      let _elFormItemSize = this.elFormItem.elFormItemSize
      let obj = {
        'medium': '8',
        'small': '6',
        'mini': '4'
      }
      return (obj[_elFormItemSize] || '10') + 'px'
    }
  },
  render () {
    return (
      <el-rate
        ref="rate"
        class="s-rate"
        {
          ...{
            attrs: {
              ...this.$attrs
            },
            on: {
              ...this.$listeners
            }
          }}>
      </el-rate>
    )
  }
}
