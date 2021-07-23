<!--
 * @Author: PT
 * @Date: 2021-07-21 15:29:59
 * @LastEditors: PT
 * @LastEditTime: 2021-07-21 15:37:45
 * @Description: file content
-->
<template>
  <el-button :class="{ 'is-dashed': dashed, 's-button': true }" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    dashed: Boolean
  }
}
</script>
<style lang='scss'>
@import "./button.scss"
</style>
