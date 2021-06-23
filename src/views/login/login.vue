<!--
 * @Author: PT
 * @Date: 2021-05-28 17:13:37
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 19:28:14
 * @Description: file content
-->
<template>
  <div>
    登陆
    <router-link to="/test">测试111</router-link>
    <router-link to="/login">登陆</router-link>
    <input type="text" v-model="value">
  </div>
</template>

<script>
import { save } from '../../utils/cookie'
export default {
  name: '',
  data() {
    return {
      foo: 'aa' === 'bbb'
    }
  },

  components: {},

  computed: {
    // foo () {
    //   return null
    // }
  },

  mounted() {
    console.log('util', save(document.body === 'aaa', 'test'))
    this.value = true
  },

  methods: {
    // foo () {}
  },

  watch: {}
}
</script>
<style lang='scss' scoped>
</style>
