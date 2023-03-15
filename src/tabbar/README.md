# Tabbar

### Install

```js
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'ghbui';

Vue.use(Tabbar);
Vue.use(TabbarItem);
```

## Usage

### Basic Usage

```html
<ghb-tabbar v-model="active">
  <ghb-tabbar-item icon="home-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="search">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="friends-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="setting-o">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

```js
export default {
  data() {
    return {
      active: 0,
    };
  },
};
```

### Match by name

```html
<ghb-tabbar v-model="active">
  <ghb-tabbar-item name="home" icon="home-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item name="search" icon="search">Tab</ghb-tabbar-item>
  <ghb-tabbar-item name="friends" icon="friends-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item name="setting" icon="setting-o">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

```js
export default {
  data() {
    return {
      active: 'home',
    };
  },
};
```

### Show Badge

```html
<ghb-tabbar v-model="active">
  <ghb-tabbar-item icon="home-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="search" dot>Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="friends-o" badge="5">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="setting-o" badge="20">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

### Custom Icon

Use `icon` slot to custom icon.

```html
<ghb-tabbar v-model="active">
  <ghb-tabbar-item badge="3">
    <span>Custom</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </ghb-tabbar-item>
  <ghb-tabbar-item icon="search">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="setting-o">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

```js
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};
```

### Custom Color

```html
<ghb-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
  <ghb-tabbar-item icon="home-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="search">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="friends-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item icon="setting-o">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

### Change Event

```html
<ghb-tabbar v-model="active" @change="onChange">
  <ghb-tabbar-item icon="home-o">Tab1</ghb-tabbar-item>
  <ghb-tabbar-item icon="search">Tab2</ghb-tabbar-item>
  <ghb-tabbar-item icon="friends-o">Tab3</ghb-tabbar-item>
  <ghb-tabbar-item icon="setting-o">Tab4</ghb-tabbar-item>
</ghb-tabbar>
```

```js
import { Notify } from 'ghbui';

export default {
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    },
  },
};
```

### Route Mode

```html
<router-view />

<ghb-tabbar route>
  <ghb-tabbar-item replace to="/home" icon="home-o">Tab</ghb-tabbar-item>
  <ghb-tabbar-item replace to="/search" icon="search">Tab</ghb-tabbar-item>
</ghb-tabbar>
```

## API

### Tabbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Identifier of current tab | _number \| string_ | `0` |
| fixed | Whether to fixed bottom | _boolean_ | `true` |
| border | Whether to show border | _boolean_ | `true` |
| z-index | Z-index | _number \| string_ | `1` |
| active-color | Color of active tab item | _string_ | `#1989fa` |
| inactive-color | Color of inactive tab item | _string_ | `#7d7e80` |
| route | Whether to enable route mode | _boolean_ | `false` |
| placeholder `v2.6.0` | Whether to generate a placeholder element when fixed | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |
| before-change `v2.10.4` | Callback function before changing tabs，return `false` to prevent change，support return Promise | _(name) => boolean \| Promise_ | - |

### Tabbar Events

| Event  | Description                      | Arguments                    |
| ------ | -------------------------------- | ---------------------------- |
| change | Emitted when changing active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier | _number \| string_ | Item index |
| icon | Icon name | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `ghb-icon` |
| dot | Whether to show red dot | _boolean_ | - |
| badge `v2.5.6` | Content of the badge | _number \| string_ | `''` |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### TabbarItem Slots

| Name | Description | SlotProps |
| ---- | ----------- | --------- |
| icon | Custom icon | active    |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @tabbar-height | `50px` | - |
| @tabbar-z-index | `1` | - |
| @tabbar-background-color | `@white` | - |
| @tabbar-item-font-size | `@font-size-sm` | - |
| @tabbar-item-text-color | `@gray-7` | - |
| @tabbar-item-active-color | `@blue` | - |
| @tabbar-item-active-background-color | `@tabbar-background-color` | - |
| @tabbar-item-line-height | `1` | - |
| @tabbar-item-icon-size | `22px` | - |
| @tabbar-item-margin-bottom | `4px` | - |
