# Checkbox 复选框

### 介绍

用于在选中和非选中状态之间进行切换。

### 引入

```js
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'ghbui';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定复选框的勾选状态。

```html
<ghb-checkbox v-model="checked">复选框</ghb-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```html
<ghb-checkbox v-model="checked" disabled>复选框</ghb-checkbox>
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```html
<ghb-checkbox v-model="checked" shape="square">复选框</ghb-checkbox>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<ghb-checkbox v-model="checked" checked-color="#ee0a24">复选框</ghb-checkbox>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<ghb-checkbox v-model="checked" icon-size="24px">复选框</ghb-checkbox>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slotProps` 判断是否为选中状态.

```html
<ghb-checkbox v-model="checked">
  自定义图标
  <template #icon="props">
    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</ghb-checkbox>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<ghb-checkbox v-model="checked" label-disabled>复选框</ghb-checkbox>
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。

```html
<ghb-checkbox-group v-model="result">
  <ghb-checkbox name="a">复选框 a</ghb-checkbox>
  <ghb-checkbox name="b">复选框 b</ghb-checkbox>
</ghb-checkbox-group>
```

```js
export default {
  data() {
    return {
      result: ['a', 'b'],
    };
  },
};
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```html
<ghb-checkbox-group v-model="result" direction="horizontal">
  <ghb-checkbox name="a">复选框 a</ghb-checkbox>
  <ghb-checkbox name="b">复选框 b</ghb-checkbox>
</ghb-checkbox-group>
```

```js
export default {
  data() {
    return {
      result: [],
    };
  },
};
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```html
<ghb-checkbox-group v-model="result" :max="2">
  <ghb-checkbox name="a">复选框 a</ghb-checkbox>
  <ghb-checkbox name="b">复选框 b</ghb-checkbox>
  <ghb-checkbox name="c">复选框 c</ghb-checkbox>
</ghb-checkbox-group>
```

### 全选与反选

通过 `CheckboxGroup` 实例上的 `toggleAll` 方法可以实现全选与反选。

```html
<ghb-checkbox-group v-model="result" ref="checkboxGroup">
  <ghb-checkbox name="a">复选框 a</ghb-checkbox>
  <ghb-checkbox name="b">复选框 b</ghb-checkbox>
  <ghb-checkbox name="c">复选框 c</ghb-checkbox>
</ghb-checkbox-group>

<ghb-button type="primary" @click="checkAll">全选</ghb-button>
<ghb-button type="info" @click="toggleAll">反选</ghb-button>
```

```js
export default {
  data() {
    return {
      result: [],
    };
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
  },
};
```

### 搭配单元格组件使用

此时你需要再引入 `Cell` 和 `CellGroup` 组件，并通过 `Checkbox` 实例上的 toggle 方法触发切换。

```html
<ghb-checkbox-group v-model="result">
  <ghb-cell-group>
    <ghb-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <ghb-checkbox :name="item" ref="checkboxes" />
      </template>
    </ghb-cell>
  </ghb-cell-group>
</ghb-checkbox-group>
```

```js
export default {
  data() {
    return {
      list: ['a', 'b'],
      result: [],
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
};
```

## API

### Checkbox Props

| 参数            | 说明                      | 类型               | 默认值    |
| --------------- | ------------------------- | ------------------ | --------- |
| v-model (value) | 是否为选中状态            | _boolean_          | `false`   |
| name            | 标识符                    | _any_              | -         |
| shape           | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled        | 是否禁用复选框            | _boolean_          | `false`   |
| label-disabled  | 是否禁用复选框文本点击    | _boolean_          | `false`   |
| label-position  | 文本位置，可选值为 `left` | _string_           | `right`   |
| icon-size       | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |
| checked-color   | 选中状态颜色              | _string_           | `#1989fa` |
| bind-group      | 是否与复选框组绑定        | _boolean_          | `true`    |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model (value) | 所有选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0`为无限制 | _number \| string_ | `0` |
| direction `v2.5.0` | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| icon-size | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 所有复选框的选中状态颜色 | _string_ | `#1989fa` |

### Checkbox Events

| 事件名 | 说明                     | 回调参数           |
| ------ | ------------------------ | ------------------ |
| change | 当绑定值变化时触发的事件 | _checked: boolean_ |
| click  | 点击复选框时触发         | _event: Event_     |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

### Checkbox Slots

| 名称    | 说明       | 参数               |
| ------- | ---------- | ------------------ |
| default | 自定义文本 | -                  |
| icon    | 自定义图标 | _checked: boolean_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | - |

### toggleAll 方法示例

```js
const { checkboxGroup } = this.$refs;

// 全部反选
checkboxGroup.toggleAll();
// 全部选中
checkboxGroup.toggleAll(true);
// 全部取消
checkboxGroup.toggleAll(false);

// 全部反选，并跳过禁用的复选框
checkboxGroup.toggleAll({
  skipDisabled: true,
});
// 全部选中，并跳过禁用的复选框
checkboxGroup.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | - |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值                     | 描述 |
| ----------------------------------- | -------------------------- | ---- |
| @checkbox-size                      | `20px`                     | -    |
| @checkbox-border-color              | `@gray-5`                  | -    |
| @checkbox-transition-duration       | `@animation-duration-fast` | -    |
| @checkbox-label-margin              | `@padding-xs`              | -    |
| @checkbox-label-color               | `@text-color`              | -    |
| @checkbox-checked-icon-color        | `@blue`                    | -    |
| @checkbox-disabled-icon-color       | `@gray-5`                  | -    |
| @checkbox-disabled-label-color      | `@gray-5`                  | -    |
| @checkbox-disabled-background-color | `@border-color`            | -    |
