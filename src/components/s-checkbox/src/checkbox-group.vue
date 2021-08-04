<script>
export default {
  name: 'SCheckboxGroup',
  props: {
    size: String,
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  render () {
    return (
      <el-checkbox-group
        class="s-checkbox-group"
        class={
          [
            's-checkbox-group',
            this.checkboxGroupSize ? 's-checkbox-group--' + this.checkboxGroupSize : ''
          ]
        }
        {
          ...{
            attrs: {...this.$attrs},
            on: {...this.$listeners}
          }
        }>
        { this.$slots.default }
      </el-checkbox-group>
    )
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    }
  }
}
</script>
<style lang="scss">
@import './checkbox-group.scss'
</style>
