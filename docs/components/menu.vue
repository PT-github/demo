<!--
 * @Author: PT
 * @Date: 2021-07-16 16:46:47
 * @LastEditors: PT
 * @LastEditTime: 2021-08-03 08:58:31
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
        }, {
          name: 'Data 组件',
          children: [
            {
              name: 'Table 表格',
              path: '/table'
            },
            {
              name: 'Tag 标签',
              path: '/tag'
            },
            {
              name: 'Progress 进度条',
              path: '/progress'
            },
            {
              name: 'Tree 树形控件',
              path: '/tree'
            },
            {
              name: 'Pagination 分页',
              path: '/pagination'
            },
            {
              name: 'Badge 标记',
              path: '/badge'
            },
            {
              name: 'Avatar 头像',
              path: '/avatar'
            }
          ]
        }, {
          name: 'Notice 组件',
          children: [
            {
              name: 'Alert 警告',
              path: '/alert'
            },
            {
              name: 'Loading 加载',
              path: '/loading'
            },
            {
              name: 'Message 消息提示',
              path: '/message'
            },
            {
              name: 'MessageBox 弹窗',
              path: '/message-box'
            },
            {
              name: 'Notification 通知',
              path: '/notification'
            }
          ]
        }, {
          name: 'Navigation 组件',
          children: [
            {
              name: 'Menu 导航菜单',
              path: '/menu'
            },
            {
              name: 'Tabs 标签页',
              path: '/tabs'
            },
            {
              name: 'Breadcrumb 面包屑',
              path: '/breadcrumb'
            },
            {
              name: 'Dropdown 下拉菜单',
              path: '/dropdown'
            },
            {
              name: 'Steps 步骤条',
              path: '/steps'
            }
          ]
        }, {
          name: 'Others 组件',
          children: [
            {
              name: 'Tooltip 文字提示',
              path: '/tooltip'
            },
            {
              name: 'Popover 弹出框',
              path: '/popover'
            },
            {
              name: 'Collapse 折叠面板',
              path: '/collapse'
            },
            {
              name: 'Timeline 时间线',
              path: '/timeline'
            },
            // {
            //   name: 'Dropdown 下拉菜单',
            //   path: '/dropdown'
            // },
            // {
            //   name: 'Steps 步骤条',
            //   path: '/steps'
            // }
          ]
        }, {
          name: '组合组件',
          children: [
            {
              name: 'TableCon 表格',
              path: '/table-con'
            },
            // {
            //   name: 'Tabs 标签页',
            //   path: '/tabs'
            // },
            // {
            //   name: 'Breadcrumb 面包屑',
            //   path: '/breadcrumb'
            // },
            // {
            //   name: 'Dropdown 下拉菜单',
            //   path: '/dropdown'
            // },
            // {
            //   name: 'Steps 步骤条',
            //   path: '/steps'
            // }
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
