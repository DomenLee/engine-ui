# Grid

### Install

```js
import Vue from 'vue';
import { Grid, GridItem } from 'ghbui';

Vue.use(Grid);
Vue.use(GridItem);
```

## Usage

### Basic Usage

```html
<ghb-grid>
  <ghb-grid-item icon="photo-o" text="Text" />
  <ghb-grid-item icon="photo-o" text="Text" />
  <ghb-grid-item icon="photo-o" text="Text" />
  <ghb-grid-item icon="photo-o" text="Text" />
</ghb-grid>
```

### Column Num

```html
<ghb-grid :column-num="3">
  <ghb-grid-item v-for="value in 6" :key="value" icon="photo-o" text="Text" />
</ghb-grid>
```

### Custom Content

```html
<ghb-grid :border="false" :column-num="3">
  <ghb-grid-item>
    <ghb-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
  </ghb-grid-item>
  <ghb-grid-item>
    <ghb-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </ghb-grid-item>
  <ghb-grid-item>
    <ghb-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </ghb-grid-item>
</ghb-grid>
```

### Square

```html
<ghb-grid square>
  <ghb-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</ghb-grid>
```

### Gutter

```html
<ghb-grid :gutter="10">
  <ghb-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</ghb-grid>
```

### Horizontal

```html
<ghb-grid direction="horizontal" :column-num="2">
  <ghb-grid-item icon="photo-o" text="文字" />
  <ghb-grid-item icon="photo-o" text="文字" />
  <ghb-grid-item icon="photo-o" text="文字" />
</ghb-grid>
```

### Route

```html
<ghb-grid clickable :column-num="2">
  <ghb-grid-item icon="home-o" text="Vue Router" to="/" />
  <ghb-grid-item icon="search" text="URL" url="/vant/mobile.html" />
</ghb-grid>
```

### Show Badge

```html
<ghb-grid :column-num="2">
  <ghb-grid-item icon="home-o" text="Text" dot />
  <ghb-grid-item icon="search" text="Text" badge="99+" />
</ghb-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| column-num | Column Num | _number \| string_ | `4` |
| icon-size | Icon size | _number \| string_ | `28px` |
| gutter | Gutter | _number \| string_ | `0` |
| border | Whether to show border | _boolean_ | `true` |
| center | Whether to center content | _boolean_ | `true` |
| square | Whether to be square shape | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| direction `v2.8.2` | Content arrangement direction, can be set to `horizontal` | _string_ | `vertical` |

### GridItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text | _string_ | - |
| icon | Icon name or URL | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `ghb-icon` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge `v2.5.6` | Content of the badge | _number \| string_ | - |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### GridItem Events

| Event | Description                       | Arguments      |
| ----- | --------------------------------- | -------------- |
| click | Emitted when component is clicked | _event: Event_ |

### GridItem Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |
| icon    | Custom icon    |
| text    | Custom text    |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @grid-item-content-padding | `@padding-md @padding-xs` | - |
| @grid-item-content-background-color | `@white` | - |
| @grid-item-content-active-color | `@active-color` | - |
| @grid-item-icon-size | `28px` | - |
| @grid-item-text-color | `@gray-7` | - |
| @grid-item-text-font-size | `@font-size-sm` | - |
