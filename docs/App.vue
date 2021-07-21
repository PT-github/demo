<!--
 * @Author: PT
 * @Date: 2021-05-27 16:37:06
 * @LastEditors: PT
 * @LastEditTime: 2021-07-16 16:16:12
 * @Description: file content
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {
    // console.log(this, '[0000]')
  },

  methods: {},

  watch: {}
}
</script>
<style lang='scss' scoped>
#app {
  height: 100%;
}
</style>
