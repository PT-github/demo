## Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

### 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。

:::demo
```html
<template>
  <s-row class="demo-avatar demo-basic">
    <s-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><s-avatar :size="50" :src="circleUrl"></s-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <s-avatar :size="size" :src="circleUrl"></s-avatar>
        </div>
      </div>
    </s-col>  
    <s-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><s-avatar shape="square" :size="50" :src="squareUrl"></s-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <s-avatar shape="square" :size="size" :src="squareUrl"></s-avatar>
        </div>
      </div>
    </s-col> 
  </s-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", 32, "small"]
      }
    }
  }
</script>
<style>
  .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
  }
  .demo-basic {
    text-align: center;
  }
  .demo-basic--circle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .demo-basic .block {
    flex: 1;
  }
  .demo-basic .block:not(:last-child) {
    border-right: 1px solid rgba(224,230,237,0.5);
  }
</style>
```
:::

### 展示类型

支持三种类型：图标、图片和字符

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <s-avatar :size="32" icon="el-icon-user"></s-avatar>
    </div>
    <div>
      <s-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></s-avatar>
    </div>
    <div>
      <s-avatar :size="32" type="primary">U</s-avatar>
    </div>
  </div>
</template>
<style>
  .demo-type {
    display: flex;
  }
  .demo-type > div {
    flex: 1;
    text-align: center;
  }
</style>
```
:::

### 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

:::demo
```html
<template>
  <div class="demo-type">
    <s-avatar :size="60" src="https://empty" @error="errorHandler">
      <img :src="src"/>
    </s-avatar>
  </div>
</template>
<script>
  const image = require('../assets/images/empty.png')
  export default {
    data () {
      return {
        src: image
      }
    },
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### 图片如何适应容器框

当展示类型为图片的时候，使用 `fit` 属性定义图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

:::demo
```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <s-avatar shape="square" :size="100" :fit="fit" :src="url"></s-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
<style>
  .demo-fit {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .demo-fit .block {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 0;
  }
  .demo-fit .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
  }
</style>
```
:::

### Attributes

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | 设置头像的图标类型，参考 Icon 组件   | string          |        |        |
| size              | 设置头像的大小                     | number/string | number / large / medium / small | large  |
| shape             | 设置头像的形状  | string |    circle / square     |   circle  |
| src               | 图片头像的资源地址 | string |        |      |
| srcSet            | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string |        |      |
| alt               | 描述图像的替换文本 | string |        |      |
| fit               | 当展示类型为图片的时候，设置图片如何适应容器框 | string |    fill / contain / cover / none / scale-down    |   cover   |


### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 |(e: Event)  |

### Slot

| 名称	 | 说明               |  
| ------ | ------------------ | 
| default  | 自定义头像展示内容 |
