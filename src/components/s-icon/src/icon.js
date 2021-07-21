/*
 * @Author: PT
 * @Date: 2020-09-29 08:36:57
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:17:27
 * @Description: SIcon组件
 */
import './icon.scss'
export default {
  name: 'SIcon',
  render () {
    return (
      this.$attrs.name && (<i class={'el-icon-' + this.$attrs.name}></i>)
    )
  }
}
