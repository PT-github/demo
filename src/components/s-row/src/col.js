/*
 * @Author: PT
 * @Date: 2020-09-29 17:43:31
 * @LastEditors: PT
 * @LastEditTime: 2020-10-09 10:20:48
 * @Description: SCol
 */

export default {
  name: 'SCol',
  render () {
    return (
      <el-col
        {
          ...{
            attrs: {
              ...this.$attrs
            }
          }
        }
      >
        {this.$slots.default}
      </el-col>
    )
  }
}
