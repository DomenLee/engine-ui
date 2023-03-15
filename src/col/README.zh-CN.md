# Layout 布局

### 介绍

Layout 提供了 `ghb-row` 和 `ghb-col` 两个组件来进行行列布局。

### 引入

```js
import Vue from 'vue';
import { Col, Row } from 'ghbui';

Vue.use(Col);
Vue.use(Row);
```

## 代码演示

### 基础用法

Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```html
<ghb-row>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
</ghb-row>

<ghb-row>
  <ghb-col span="4">span: 4</ghb-col>
  <ghb-col span="10" offset="4">offset: 4, span: 10</ghb-col>
</ghb-row>

<ghb-row>
  <ghb-col offset="12" span="12">offset: 12, span: 12</ghb-col>
</ghb-row>
```

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```html
<ghb-row gutter="20">
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
</ghb-row>
```

### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐。

```html
<!-- 左对齐 -->
<ghb-row type="flex">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<!-- 居中 -->
<ghb-row type="flex" justify="center">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<!-- 右对齐 -->
<ghb-row type="flex" justify="end">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<!-- 两端对齐 -->
<ghb-row type="flex" justify="space-between">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<!-- 每个元素的两侧间隔相等 -->
<ghb-row type="flex" justify="space-around">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为`flex` | _string_ | - |
| gutter | 列元素之间的间距（单位为 px） | _number \| string_ | - |
| tag | 自定义元素标签 | _string_ | `div` |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | _string_ | `top` |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number \| string_ | -      |
| offset | 列元素偏移距离 | _number \| string_ | -      |
| tag    | 自定义元素标签 | _string_           | `div`  |

### Row Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Col Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |
