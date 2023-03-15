# Checkbox

### Install

```js
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'ghbui';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<ghb-checkbox v-model="checked">Checkbox</ghb-checkbox>
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

### Disabled

```html
<ghb-checkbox v-model="checked" disabled>Checkbox</ghb-checkbox>
```

### Custom Shape

```html
<ghb-checkbox v-model="checked" shape="square">Checkbox</ghb-checkbox>
```

### Custom Color

```html
<ghb-checkbox v-model="checked" checked-color="#ee0a24">Checkbox</ghb-checkbox>
```

### Custom Icon Size

```html
<ghb-checkbox v-model="checked" icon-size="24px">Checkbox</ghb-checkbox>
```

### Custom Icon

Use icon slot to custom icon.

```html
<ghb-checkbox v-model="checked">
  customize icon
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

### Disable Label Click

```html
<ghb-checkbox v-model="checked" label-disabled>Checkbox</ghb-checkbox>
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<ghb-checkbox-group v-model="result">
  <ghb-checkbox name="a">Checkbox a</ghb-checkbox>
  <ghb-checkbox name="b">Checkbox b</ghb-checkbox>
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

### Horizontal

```html
<ghb-checkbox-group v-model="result" direction="horizontal">
  <ghb-checkbox name="a">Checkbox a</ghb-checkbox>
  <ghb-checkbox name="b">Checkbox b</ghb-checkbox>
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

### Maximum amount of checked options

```html
<ghb-checkbox-group v-model="result" :max="2">
  <ghb-checkbox name="a">Checkbox a</ghb-checkbox>
  <ghb-checkbox name="b">Checkbox b</ghb-checkbox>
  <ghb-checkbox name="c">Checkbox c</ghb-checkbox>
</ghb-checkbox-group>
```

### Toggle All

```html
<ghb-checkbox-group v-model="result" ref="checkboxGroup">
  <ghb-checkbox name="a">Checkbox a</ghb-checkbox>
  <ghb-checkbox name="b">Checkbox b</ghb-checkbox>
  <ghb-checkbox name="c">Checkbox c</ghb-checkbox>
</ghb-checkbox-group>

<ghb-button type="primary" @click="checkAll">Check All</ghb-button>
<ghb-button type="info" @click="toggleAll">Toggle All</ghb-button>
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

### Inside a Cell

```html
<ghb-checkbox-group v-model="result">
  <ghb-cell-group>
    <ghb-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
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
      list: ['a', 'b']
      result: []
    };
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) | Check status | _boolean_ | `false` |
| name | Checkbox name | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| disabled | Disable checkbox | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` | - |
| bind-group | Whether to bind with CheckboxGroup | _boolean_ | `true` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model (value) | Names of all checked checkboxes | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | Maximum amount of checked options | _number \| string_ | `0`(Unlimited) |
| direction `v2.5.0` | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size | Icon size of all checkboxes | _number \| string_ | `20px` |
| checked-color | Checked color of all checkboxes | _string_ | `#1989fa` | - |

### Checkbox Events

| Event  | Description                          | Parameters         |
| ------ | ------------------------------------ | ------------------ |
| change | Emitted when value changed           | _checked: boolean_ |
| click  | Emitted when the checkbox is clicked | _event: Event_     |

### CheckboxGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _names: any[]_ |

### Checkbox Slots

| Name    | Description  | SlotProps          |
| ------- | ------------ | ------------------ |
| default | Custom label | -                  |
| icon    | Custom icon  | _checked: boolean_ |

### CheckboxGroup Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CheckboxGroup instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle check status of all checkboxes | _options?: boolean \| object_ | - |

### toggleAll Usage

```js
const { checkboxGroup } = this.$refs;

// Toggle all
checkboxGroup.toggleAll();
// Select all
checkboxGroup.toggleAll(true);
// Unselect all
checkboxGroup.toggleAll(false);

// Toggle all, skip disabled
checkboxGroup.toggleAll({
  skipDisabled: true,
});
// Select all, skip disabled
checkboxGroup.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Checkbox instance and call instance methods.

| Name   | Description         | Attribute           | Return value |
| ------ | ------------------- | ------------------- | ------------ |
| toggle | Toggle check status | _checked?: boolean_ | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @checkbox-size | `20px` | - |
| @checkbox-border-color | `@gray-5` | - |
| @checkbox-transition-duration | `@animation-duration-fast` | - |
| @checkbox-label-margin | `@padding-xs` | - |
| @checkbox-label-color | `@text-color` | - |
| @checkbox-checked-icon-color | `@blue` | - |
| @checkbox-disabled-icon-color | `@gray-5` | - |
| @checkbox-disabled-label-color | `@gray-5` | - |
| @checkbox-disabled-background-color | `@border-color` | - |
