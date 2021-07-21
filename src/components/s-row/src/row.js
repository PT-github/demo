/*
 * @Author: PT
 * @Date: 2020-09-29 17:25:24
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 15:35:27
 * @Description: SRow
 */
export default {
  name: 'SRow',
  render () {
    return (
      <el-row
        {
          ...{
            attrs: {
              ...this.$attrs
            }
          }
        }
      >
        {this.$slots.default}
      </el-row>
    )
  }
}
