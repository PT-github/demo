<!--
 * @Author: PT
 * @Date: 2021-07-15 16:35:33
 * @LastEditors: PT
 * @LastEditTime: 2021-07-15 16:43:39
 * @Description: file content
-->
<template>
  <div>
    <s-alert
      title="成功提示的文案"
      type="success"
      show-icon
    >
    </s-alert>
    <s-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </s-alert>
    <s-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </s-alert>
    <s-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </s-alert>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    hello() {
      alert('Hello World!')
    }
  },

  watch: {}
}
</script>
<style lang='scss' scoped>
</style>
