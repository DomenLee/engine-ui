# Layout

### Intro

Quickly and easily create layouts with `ghb-row` and `ghb-col`.

### Install

```js
import Vue from 'vue';
import { Col, Row } from 'ghbui';

Vue.use(Col);
Vue.use(Row);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<ghb-row>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
</ghb-row>

<ghb-row>
  <ghb-col span="4">span: 4</ghb-col>
  <ghb-col span="10" offset="4">offset: 4, span: 10</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<ghb-row>
  <ghb-col offset="12" span="12">offset: 12, span: 12</ghb-col>
</ghb-row>
```

### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0.

```html
<ghb-row gutter="20">
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
  <ghb-col span="8">span: 8</ghb-col>
</ghb-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout.

```html
<ghb-row type="flex">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<ghb-row type="flex" justify="center">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<ghb-row type="flex" justify="end">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<ghb-row type="flex" justify="space-between">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>

<ghb-row type="flex" justify="space-around">
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
  <ghb-col span="6">span: 6</ghb-col>
</ghb-row>
```

## API

### Row Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Layout type, can be set to `flex` | _string_ | - |
| gutter | Grid spacing（px） | _number \| string_ | - |
| tag | Custom element tag | _string_ | `div` |
| justify | Flex main axis，can be set to end/center/space-around/space-between | _string_ | `start` |
| align | Flex cross axis, be set to center/bottom | _string_ | `top` |

### Col Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| span | number of column the grid spans | _number \| string_ | - |
| offset | number of spacing on the left side of the grid | _number \| string_ | - |
| tag | Custom element tag | _string_ | `div` |

### Row Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| click | Emitted when the row is clicked | _event: Event_ |

### Col Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| click | Emitted when the col is clicked | _event: Event_ |
