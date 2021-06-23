<!--
 * @Author: PT
 * @Date: 2021-05-28 17:13:32
 * @LastEditors: PT
 * @LastEditTime: 2021-06-23 18:59:59
 * @Description: file content
-->
<template>
  <div>
    <div class="color">测试</div>
    <router-link to="/test">测试</router-link>
    <router-link to="/login">登陆</router-link>
    <input
      type="text"
      v-model="value"
    >
  </div>
</template>

<script>
import { get, remove } from '../../utils/cookie'
export default {
  name: 'Test',
  data() {
    return {
      foo: null
    }
  },

  components: {},

  computed: {
    foo() {
      return null
    }
  },

  mounted() {
    var test_atb_c = ''
    console.log('util', get('aaa'), test_atb_c)
    // console.log('util', addClass(document.body, 'test'))
  },

  methods: {
    foo() {}
  },

  watch: {}
}
</script>
<style lang='scss' scoped>
.color {
  color: $color;
}
</style>