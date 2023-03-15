# Button

### Install

```js
import Vue from 'vue';
import { Button } from 'ghbui';

Vue.use(Button);
```

## Usage

### Type

```html
<ghb-button type="primary">Primary</ghb-button>
<ghb-button type="info">Info</ghb-button>
<ghb-button type="default">Default</ghb-button>
<ghb-button type="danger">Danger</ghb-button>
<ghb-button type="warning">Warning</ghb-button>
```

### Plain

```html
<ghb-button plain type="primary">Primary</ghb-button>
<ghb-button plain type="info">Danger</ghb-button>
```

### Hairline

```html
<ghb-button plain hairline type="primary">Hairline</ghb-button>
<ghb-button plain hairline type="info">Hairline</ghb-button>
```

### Disabled

```html
<ghb-button disabled type="primary">Disabled</ghb-button>
<ghb-button disabled type="info">Disabled</ghb-button>
```

### Loading

```html
<ghb-button loading type="primary" />
<ghb-button loading type="primary" loading-type="spinner" />
<ghb-button loading type="info" loading-text="Loading..." />
```

### Shape

```html
<ghb-button square type="primary">Square</ghb-button>
<ghb-button round type="info">Round</ghb-button>
```

### Icon

```html
<ghb-button icon="plus" type="primary" />
<ghb-button icon="plus" type="primary">Button</ghb-button>
<ghb-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info">
  Button
</ghb-button>
```

### Size

```html
<ghb-button type="primary" size="large">Large</ghb-button>
<ghb-button type="primary" size="normal">Normal</ghb-button>
<ghb-button type="primary" size="small">Small</ghb-button>
<ghb-button type="primary" size="mini">Mini</ghb-button>
```

### Block Element

```html
<ghb-button type="primary" block>Block Element</ghb-button>
```

### Route

```html
<ghb-button type="primary" url="/vant/mobile.html">URL</ghb-button>
<ghb-button type="primary" to="index">Vue Router</ghb-button>
```

### Custom Color

```html
<ghb-button color="#7232dd">Pure</ghb-button>
<ghb-button color="#7232dd" plain>Pure</ghb-button>
<ghb-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</ghb-button>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.6.0` | Icon className prefix | _string_ | `ghb-icon` |
| icon-position `v2.10.7` | Icon position, can be set to `right` | _string_ | `left` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `''` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as using vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when button is clicked and not disabled or loading | _event: Event_ |
| touchstart | Emitted when button is touched | _event: TouchEvent_ |

### Slots

| Name              | Description         |
| ----------------- | ------------------- |
| default           | Default slot        |
| icon `v2.12.21`   | Custom icon         |
| loading `v2.10.1` | Custom loading icon |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value        | Description |
| -------------------------------- | -------------------- | ----------- |
| @button-mini-height              | `24px`               | -           |
| @button-mini-font-size           | `@font-size-xs`      | -           |
| @button-small-height             | `32px`               | -           |
| @button-small-font-size          | `@font-size-sm`      | -           |
| @button-normal-font-size         | `@font-size-md`      | -           |
| @button-large-height             | `50px`               | -           |
| @button-default-height           | `44px`               | -           |
| @button-default-line-height      | `1.2`                | -           |
| @button-default-font-size        | `@font-size-lg`      | -           |
| @button-default-color            | `@text-color`        | -           |
| @button-default-background-color | `@white`             | -           |
| @button-default-border-color     | `@border-color`      | -           |
| @button-primary-color            | `@white`             | -           |
| @button-primary-background-color | `@green`             | -           |
| @button-primary-border-color     | `@green`             | -           |
| @button-info-color               | `@white`             | -           |
| @button-info-background-color    | `@blue`              | -           |
| @button-info-border-color        | `@blue`              | -           |
| @button-danger-color             | `@white`             | -           |
| @button-danger-background-color  | `@red`               | -           |
| @button-danger-border-color      | `@red`               | -           |
| @button-warning-color            | `@white`             | -           |
| @button-warning-background-color | `@orange`            | -           |
| @button-warning-border-color     | `@orange`            | -           |
| @button-border-width             | `@border-width-base` | -           |
| @button-border-radius            | `@border-radius-sm`  | -           |
| @button-round-border-radius      | `@border-radius-max` | -           |
| @button-plain-background-color   | `@white`             | -           |
| @button-disabled-opacity         | `@disabled-opacity`  | -           |
