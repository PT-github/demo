<!--
 * @Author: PT
 * @Date: 2021-07-16 16:46:47
 * @LastEditors: PT
 * @LastEditTime: 2021-07-23 10:13:06
 * @Description: file content
-->
<template>
  <ul class="sidebar-links">
    <li v-for="(item, index) in list" :key="'li_' + index">
      <p class="title">{{ item.name }}</p>
      <ul class="sidebar-group-items">
        <li v-for="(sub, idx) in item.children" :key="'li_sub_' + idx">
          <router-link class="link" active-class="active" :to="sub.path">{{ sub.name }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      list: [
        {
          name: '基础组件',
          children: [
            {
              name: '栅格布局',
              path: '/row'
            },
            {
              name: 'Layout 布局',
              path: '/layout'
            },
            {
              name: 'Icon 图标',
              path: '/icon'
            },
            {
              name: 'Button 按钮',
              path: '/button'
            }
          ]
        },
        {
          name: 'Form组件',
          children: [
            {
              name: 'Radio 单选框',
              path: '/radio'
            },
            {
              name: 'Checkbox 多选框',
              path: '/checkbox'
            },
            {
              name: 'Input 输入框',
              path: '/input'
            },
            {
              name: 'InputNumber 计数器',
              path: '/input-number'
            },
            {
              name: 'Select 选择器',
              path: '/select'
            },
            {
              name: 'TreeSelect 选择器',
              path: '/treeselect'
            },
            {
              name: 'Cascader 级联选择器',
              path: '/cascader'
            },
            {
              name: 'Switch 开关',
              path: '/switch'
            },
            {
              name: 'Slider 滑块',
              path: '/slider'
            },
            {
              name: 'TimePicker 时间选择器',
              path: '/time-picker'
            },
            {
              name: 'DatePicker 日期选择器',
              path: '/date-picker'
            },
            {
              name: 'DateTimePicker 日期时间选择器',
              path: '/datetime-picker'
            },
            {
              name: 'Upload 上传',
              path: '/upload'
            },
            {
              name: 'Rate 评分',
              path: '/rate'
            },
            {
              name: 'Transfer 穿梭框',
              path: '/transfer'
            },
            {
              name: 'Form 表单',
              path: '/form'
            },
          ]
        },{
          name: '基础组件',
          children: [
            {
              name: '栅格布局',
              path: '/row'
            },
            {
              name: 'Layout布局',
              path: '/layout'
            },
            {
              name: 'Icon图标',
              path: '/icon'
            },
            {
              name: 'Button按钮',
              path: '/button'
            }
          ]
        },
      ]
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
}
</script>
<style lang='scss' scoped>
.sidebar-links {
  padding: 24px 0;
  .title {
    font-size: 18px;
    // font-weight: bold;
    padding: 5px 20px;
    color: #999;
  }
}
.sidebar-group-items {
  .link {
    font-size: 14px;
    font-weight: 400;
    padding: 8px 16px 8px 32px;
    color: #2c3e50;
    text-decoration: none;
    display: inline-block;
    border-left: 4px solid transparent;
    &:hover {
      color: #409eff;
    }
    &.active {
      font-weight: 600;
      color: #409eff;
      border-left-color: #409eff;
    }
  }
}
</style>
