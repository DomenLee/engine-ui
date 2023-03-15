# CountDown

### Install

```js
import Vue from 'vue';
import { CountDown } from 'ghbui';

Vue.use(CountDown);
```

## Usage

### Basic Usage

```html
<ghb-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
};
```

### Custom Format

```html
<ghb-count-down :time="time" format="DD Day, HH:mm:ss" />
```

### Millisecond

```html
<ghb-count-down millisecond :time="time" format="HH:mm:ss:SS" />
```

### Custom Style

```html
<ghb-count-down :time="time">
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</ghb-count-down>

<style>
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
```

### Manual Control

```html
<ghb-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finish"
/>
<ghb-grid clickable :column-num="3">
  <ghb-grid-item text="Start" icon="play-circle-o" @click="start" />
  <ghb-grid-item text="Pause" icon="pause-circle-o" @click="pause" />
  <ghb-grid-item text="Reset" icon="replay" @click="reset" />
</ghb-grid>
```

```js
import { Toast } from 'ghbui';

export default {
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast('Finished');
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| time | Total time | _number \| string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| auto-start | Whether to auto start count down | _boolean_ | `true` |
| millisecond | Whether to enable millisecond render | _boolean_ | `false` |

### Available formats

| Format | Description           |
| ------ | --------------------- |
| DD     | Day                   |
| HH     | Hour                  |
| mm     | Minute                |
| ss     | Second                |
| S      | Millisecond, 1-digit  |
| SS     | Millisecond, 2-digits |
| SSS    | Millisecond, 3-digits |

### Events

| Event  | Description                      | Arguments            |
| ------ | -------------------------------- | -------------------- |
| finish | Emitted when count down finished | -                    |
| change | Emitted when count down changed  | _timeData: TimeData_ |

### Slots

| Name    | Description    | SlotProps            |
| ------- | -------------- | -------------------- |
| default | Custom Content | _timeData: TimeData_ |

### TimeData Structure

| Name         | Description         | Type     |
| ------------ | ------------------- | -------- |
| days         | Remain days         | _number_ |
| hours        | Remain hours        | _number_ |
| minutes      | Remain minutes      | _number_ |
| seconds      | Remain seconds      | _number_ |
| milliseconds | Remain milliseconds | _number_ |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get CountDown instance and call instance methods.

| Name  | Description      | Attribute | Return value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| pause | Pause count down | -         | -            |
| reset | Reset count down | -         | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                    | Default Value     | Description |
| ----------------------- | ----------------- | ----------- |
| @count-down-text-color  | `@text-color`     | -           |
| @count-down-font-size   | `@font-size-md`   | -           |
| @count-down-line-height | `@line-height-md` | -           |
