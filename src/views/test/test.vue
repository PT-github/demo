<!--
 * @Author: PT
 * @Date: 2021-05-28 17:13:32
 * @LastEditors: PT
 * @LastEditTime: 2021-06-17 17:05:26
 * @Description: file content
-->
<template>
  <div>
    <div class="color">测试</div>
    <router-link to="/test">测试</router-link>
    <router-link to="/login">登陆</router-link>
  </div>
</template>

<script>
// import utils from '../../utils'
import { addClass } from '../../utils/dom'
// import { get } from '../../utils/cookie'
export default {
  name: '',
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {
    // console.log('util', utils.cookie.get('aaa'))
    console.log('util', addClass(document.body, 'test'))
  },

  methods: {},

  watch: {}
}
</script>
<style lang='scss' scoped>
.color {
  color: $color;
}
</style>