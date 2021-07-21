<!--
 * @Author: PT
 * @Date: 2021-07-16 16:06:23
 * @LastEditors: PT
 * @LastEditTime: 2021-07-19 15:35:57
 * @Description: file content
-->
<template>
  <s-layout>
    <s-layout-header class="layout-header">
      <div class="logo">
        <span class="pic">
          <img src="../assets/images/logo.png" alt="">
        </span>
        <div class="title">公共组件</div>
      </div>
      
    </s-layout-header>
    <s-layout>
      <s-layout-sider class="layout-sider">
        <Menu></Menu>
      </s-layout-sider>
      <s-layout-content class="layout-content">
        <div class="docs-content" :class="[ currentClass ]">
          <router-view></router-view>
        </div>
      </s-layout-content>
    </s-layout>
  </s-layout>
</template>

<script>
import Menu from './menu'
export default {
  name: 'Layout',
  data() {
    return {
      currentClass: ''
    }
  },

  components: {
    Menu
  },

  // computed: {
  //   currentClass() {
  //     return `docs-${ this.$router.currentRoute.path.split('/').pop() }`
  //   }
  // },

  mounted() {},

  methods: {},

  watch: {
    '$route': {
      handler: function (val) {
        this.currentClass = `docs-${ val.name }`
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-header {
  padding: 0 24px;
}
.logo {
  display: flex;
  align-items: center;
  height: 100%;
  .pic {
    img {
      width: 35px;
      margin-right: 12px;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    // color: #2c3e50;
    color: #1f2f3d;
  }
}
.layout-sider {
  border-right: 1px solid #eaecef;
  width: 320px;
}
.layout-content {
  background-color: #FFFFFF;
}
.docs-content {
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 32px;
}
</style>
<style lang='scss'>
.s-layout .s-layout {
  flex: 1;
  overflow: hidden;
}
.s-layout-sider, .s-layout-content {
  overflow-y: auto;
}
</style>
