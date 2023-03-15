# Badge

### Install

```js
import Vue from 'vue';
import { Badge } from 'ghbui';

Vue.use(Badge);
```

## Usage

### Basic Usage

```html
<ghb-badge :content="5">
  <div class="child" />
</ghb-badge>
<ghb-badge :content="10">
  <div class="child" />
</ghb-badge>
<ghb-badge content="Hot">
  <div class="child" />
</ghb-badge>
<ghb-badge dot>
  <div class="child" />
</ghb-badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### Max

```html
<ghb-badge :content="20" max="9">
  <div class="child" />
</ghb-badge>
<ghb-badge :content="50" max="20">
  <div class="child" />
</ghb-badge>
<ghb-badge :content="200" max="99">
  <div class="child" />
</ghb-badge>
```

### Custom Color

```html
<ghb-badge :content="5" color="#1989fa">
  <div class="child" />
</ghb-badge>
<ghb-badge :content="10" color="#1989fa">
  <div class="child" />
</ghb-badge>
<ghb-badge dot color="#1989fa">
  <div class="child" />
</ghb-badge>
```

### Custom Content

Use `content` slot to custom :content of badge.

```html
<ghb-badge>
  <div class="child" />
  <template #content>
    <ghb-icon name="success" class="badge-icon" />
  </template>
</ghb-badge>
<ghb-badge>
  <div class="child" />
  <template #content>
    <ghb-icon name="cross" class="badge-icon" />
  </template>
</ghb-badge>
<ghb-badge>
  <div class="child" />
  <template #content>
    <ghb-icon name="down" class="badge-icon" />
  </template>
</ghb-badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### Standalone

```html
<ghb-badge :content="20" />

<ghb-badge :content="200" max="99" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| content | Badge content | _number \| string_ | - |
| color | Background color | _string_ | `#ee0a24` |
| dot | Whether to show dot | _boolean_ | `false` |
| max | Max value，show `{max}+` when exceed，only works when content is number | _number \| string_ | - |

### Slots

| Name    | Description          |
| ------- | -------------------- |
| default | Default slot         |
| content | Custom badge content |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @badge-size | `16px` | - |
| @badge-color | `@white` | - |
| @badge-padding | `0 3px` | - |
| @badge-font-size | `@font-size-sm` | - |
| @badge-font-weight | `@font-weight-bold` | - |
| @badge-border-width | `@border-width-base` | - |
| @badge-background-color | `@red` | - |
| @badge-dot-color | `@red` | - |
| @badge-dot-size | `8px` | - |
| @badge-font-family | `-apple-system-font, Helvetica Neue, Arial, sans-serif` | - |
