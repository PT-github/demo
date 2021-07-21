import './option-group.scss'
export default {
  name: 'SOptionGroup',
  render () {
    return (
      <el-option-group class="s-option-group" {
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
      </el-option-group>
    )
  }
}
