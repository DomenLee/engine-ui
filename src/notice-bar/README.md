# NoticeBar

### Install

```js
import Vue from 'vue';
import { NoticeBar } from 'ghbui';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<ghb-notice-bar text="Notice Content" left-icon="volume-o" />
```

### Scrollable

```html
<!-- Enable scroll when text is short -->
<ghb-notice-bar scrollable text="Notice Content" />

<!-- Disable scroll when text is long -->
<ghb-notice-bar
  :scrollable="false"
  text="Technology is the common soul of the people who developed it."
/>
```

### Wrapable

```html
<ghb-notice-bar wrapable :scrollable="false">Notice Content</ghb-notice-bar>
```

### Mode

```html
<ghb-notice-bar mode="closeable">Notice Content</ghb-notice-bar>

<ghb-notice-bar mode="link">Notice Content</ghb-notice-bar>
```

### Custom Style

```html
<ghb-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  Notice Content
</ghb-notice-bar>
```

### Vertical Scroll

```html
<ghb-notice-bar left-icon="volume-o" :scrollable="false">
  <ghb-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <ghb-swipe-item>Content 1</ghb-swipe-item>
    <ghb-swipe-item>Content 2</ghb-swipe-item>
    <ghb-swipe-item>Content 3</ghb-swipe-item>
  </ghb-swipe>
</ghb-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Mode, can be set to `closeable` `link` | _string_ | `''` |
| text | Notice text content | _string_ | `''` | - |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| left-icon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `60` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                        | Arguments      |
| --------------- | ---------------------------------- | -------------- |
| click           | Emitted when NoticeBar is clicked  | _event: Event_ |
| close           | Emitted when NoticeBar is closed   | _event: Event_ |
| replay `v2.6.2` | Emitted when NoticeBar is replayed | -              |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Field instance and call instance methods.

| Name             | Description     | Attribute | Return value |
| ---------------- | --------------- | --------- | ------------ |
| reset `v2.12.32` | Reset NoticeBar | -         | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                         | Default Value             | Description |
| ---------------------------- | ------------------------- | ----------- |
| @notice-bar-height           | `40px`                    | -           |
| @notice-bar-padding          | `0 @padding-md`           | -           |
| @notice-bar-wrapable-padding | `@padding-xs @padding-md` | -           |
| @notice-bar-text-color       | `@orange-dark`            | -           |
| @notice-bar-font-size        | `@font-size-md`           | -           |
| @notice-bar-line-height      | `24px`                    | -           |
| @notice-bar-background-color | `@orange-light`           | -           |
| @notice-bar-icon-size        | `16px`                    | -           |
| @notice-bar-icon-min-width   | `24px`                    | -           |
