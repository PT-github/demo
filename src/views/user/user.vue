<!--
 * @Author: PT
 * @Date: 2021-05-28 17:13:32
 * @LastEditors: PT
 * @LastEditTime: 2021-07-14 18:48:36
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
    <el-button
      icon="el-icon-delete"
      type="danger"
      size="mini"
    >主按钮</el-button>
    <el-button
    icon="el-icon-delete"
      type="danger"
      size="small"
    >主按钮</el-button>
    <el-button
    icon="el-icon-delete"
      type="danger"
    >主按钮</el-button>
    <el-select
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
// import { get, remove } from '../../utils/cookie'
export default {
  name: 'User',
  data() {
    return {
      foo: null,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },

  components: {},

  computed: {
    // foo() {
    //   return null
    // }
  },

  mounted() {
    // var test_atb_c = ''
    // console.log('util', get('aaa'), test_atb_c)
    // console.log('util', addClass(document.body, 'test'))
  },

  methods: {
    // foo() {}
  },

  watch: {}
}
</script>
<style lang='scss' scoped>
.color {
  color: $color;
}
</style>
