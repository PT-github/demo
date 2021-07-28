/*
 * @Author: PT
 * @Date: 2020-10-10 14:41:02
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 11:16:22
 * @Description: SAlert
 */
import './alert.scss'
export default {
  name: 'SAlert',
  render () {
    return (
      <el-alert ref="alert"
        class={
          {
            's-alert': true,
            'has-description': this.$attrs.description
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
        {
          this.$slots.title && (
            <template slot="title">
              { this.$slots.title }
            </template>
          )
        }
      </el-alert>
    )
  }
}
