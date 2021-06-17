<!--
 * @Author: PT
 * @Date: 2021-05-28 17:13:37
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 17:40:59
 * @Description: file content
-->
<template>
  <div>
    登陆
    <router-link to="/test">测试111</router-link>
    <router-link to="/login">登陆</router-link>
  </div>
</template>

<script>
import { addClass } from '../../utils/dom'
export default {
  name: '',
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {
    console.log('util', addClass(document.body, 'test'))
  },

  methods: {},

  watch: {}
}
</script>
<style lang='scss' scoped>
</style>
