# Sticky

### Install

```js
import Vue from 'vue';
import { Sticky } from 'ghbui';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<ghb-sticky>
  <ghb-button type="primary">Basic Usage</ghb-button>
</ghb-sticky>
```

### Offset Top

```html
<ghb-sticky :offset-top="50">
  <ghb-button type="info">Offset Top</ghb-button>
</ghb-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <ghb-sticky :container="container">
    <ghb-button type="warning">Set Container</ghb-button>
  </ghb-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| offset-top `v2.8.7` | Offset top, supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| z-index | z-index when sticky | _number \| string_ | `99` |
| container | Container DOM | _Element_ | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change `v2.12.13` | Emitted when sticky status changed | _isFixed: boolean_ |
| scroll | Emitted when scrolling | _{ scrollTop: number, isFixed: boolean }_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name            | Default Value | Description |
| --------------- | ------------- | ----------- |
| @sticky-z-index | `99`          | -           |
