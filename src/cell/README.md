# Cell

### Install

```js
import Vue from 'vue';
import { Cell, CellGroup } from 'ghbui';

Vue.use(Cell);
Vue.use(CellGroup);
```

## Usage

### Basic Usage

```html
<ghb-cell-group>
  <ghb-cell title="Cell title" value="Content" />
  <ghb-cell title="Cell title" value="Content" label="Description" />
</ghb-cell-group>
```

### Inset Grouped

```html
<ghb-cell-group inset>
  <ghb-cell title="Cell title" value="Content" />
  <ghb-cell title="Cell title" value="Content" label="Description" />
</ghb-cell-group>
```

### Size

```html
<ghb-cell-group>
  <ghb-cell title="Cell title" value="Content" size="large" />
  <ghb-cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</ghb-cell-group>
```

### Left Icon

```html
<ghb-cell-group>
  <ghb-cell title="Cell title" icon="location-o" />
</ghb-cell-group>
```

### Value only

```html
<ghb-cell-group>
  <ghb-cell value="Content" />
</ghb-cell-group>
```

### Link

```html
<ghb-cell-group>
  <ghb-cell title="Cell title" is-link />
  <ghb-cell title="Cell title" is-link value="Content" />
  <ghb-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</ghb-cell-group>
```

### Router

```html
<ghb-cell-group>
  <ghb-cell title="URL" is-link url="/vant/mobile.html" />
  <ghb-cell title="Vue Router" is-link to="index" />
</ghb-cell-group>
```

### Group Title

```html
<ghb-cell-group title="Group 1">
  <ghb-cell title="Cell title" value="Content" />
</ghb-cell-group>
<ghb-cell-group title="Group 2">
  <ghb-cell title="Cell title" value="Content" />
</ghb-cell-group>
```

### Use Slots

```html
<ghb-cell value="Content" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">Title</span>
    <ghb-tag type="danger">Tag</ghb-tag>
  </template>
</ghb-cell>

<ghb-cell title="Title" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <ghb-icon name="search" class="search-icon" />
  </template>
</ghb-cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### Vertical Center

```html
<ghb-cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| title     | Group title                  | _string_  | -       |
| border    | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `ghb-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `null` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| title-style | Title style | _any_ | - |
| title-class | Title className | _any_ | - |
| value-class | Value className | _any_ | - |
| label-class | Label className | _any_ | - |

### Cell Events

| Event | Description                  | Arguments      |
| ----- | ---------------------------- | -------------- |
| click | Emitted when cell is clicked | _event: Event_ |

### CellGroup Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
| title   | Custom title |

### Cell Slots

| Name       | Description                       |
| ---------- | --------------------------------- |
| default    | Custom value                      |
| icon       | Custom icon                       |
| title      | Custom title                      |
| label      | Custom label                      |
| right-icon | Custom right icon                 |
| extra      | Custom extra content on the right |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @cell-font-size | `@font-size-md` | - |
| @cell-line-height | `24px` | - |
| @cell-vertical-padding | `10px` | - |
| @cell-horizontal-padding | `@padding-md` | - |
| @cell-text-color | `@text-color` | - |
| @cell-background-color | `@white` | - |
| @cell-border-color | `@border-color` | - |
| @cell-active-color | `@active-color` | - |
| @cell-required-color | `@red` | - |
| @cell-label-color | `@gray-6` | - |
| @cell-label-font-size | `@font-size-sm` | - |
| @cell-label-line-height | `@line-height-sm` | - |
| @cell-label-margin-top | `@padding-base` | - |
| @cell-value-color | `@gray-6` | - |
| @cell-icon-size | `16px` | - |
| @cell-right-icon-color | `@gray-6` | - |
| @cell-large-vertical-padding | `@padding-sm` | - |
| @cell-large-title-font-size | `@font-size-lg` | - |
| @cell-large-label-font-size | `@font-size-md` | - |
| @cell-group-background-color | `@white` | - |
| @cell-group-title-color | `@gray-6` | - |
| @cell-group-title-padding | `@padding-md @padding-md @padding-xs` | - |
| @cell-group-title-font-size | `@font-size-md` | - |
| @cell-group-title-line-height | `16px` | - |
