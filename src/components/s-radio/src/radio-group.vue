<script>

export default {
  name: 'SRadioGroup',
  props: {
    radioGroupSize: String
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
      <el-radio-group
        class={
          [
            's-radio-group',
            this.size ? 's-radio-group--' + this.size : ''
          ]
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
        }
      >
        {this.$slots.default}
      </el-radio-group>
    )
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    size() {
      return this.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
  }
}
</script>
<style lang="scss">
@import './radio-group.scss'
</style>
