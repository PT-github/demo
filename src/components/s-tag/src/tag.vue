<!--
 * @Author: PT
 * @Date: 2021-08-03 17:05:24
 * @LastEditors: PT
 * @LastEditTime: 2021-08-03 17:08:48
 * @Description: file content
-->
<script>
export default {
  name: 'STag',
  inject: [ 'elForm' ],
  render () {
    let size = this.$attrs.size || (this.elForm || {}).size
    return (
      <el-tag ref="tag" class="s-tag" {
        ...{
          attrs: {
            size,
            ...this.$attrs,
          },
          on: {
            ...this.$listeners
          }
        }}>
        { this.$slots.default }
      </el-tag>
    )
  }
}
</script>
<style lang="scss">
@import './tag.scss'
</style>
