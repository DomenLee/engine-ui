<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-count-down :time="time" />
    </demo-block>

    <demo-block :title="t('customFormat')">
      <ghb-count-down :time="time" :format="t('formatWithDay')" />
    </demo-block>

    <demo-block :title="t('millisecond')">
      <ghb-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <ghb-count-down :time="time">
        <template #default="currentTime">
          <span class="block">{{ currentTime.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.seconds }}</span>
        </template>
      </ghb-count-down>
    </demo-block>

    <demo-block :title="t('manualControl')">
      <ghb-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="$toast(t('finished'))"
      />
      <ghb-grid clickable :column-num="3">
        <ghb-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
        <ghb-grid-item
          icon="pause-circle-o"
          :text="t('pause')"
          @click="pause"
        />
        <ghb-grid-item icon="replay" :text="t('reset')" @click="reset" />
      </ghb-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      millisecond: '毫秒级渲染',
      customStyle: '自定义样式',
      customFormat: '自定义格式',
      manualControl: '手动控制',
      formatWithDay: 'DD 天 HH 时 mm 分 ss 秒',
      reset: '重置',
      pause: '暂停',
      start: '开始',
      finished: '倒计时结束',
    },
    'en-US': {
      millisecond: 'Millisecond',
      customStyle: 'Custom Style',
      customFormat: 'Custom Format',
      manualControl: 'Manual Control',
      formatWithDay: 'DD Day, HH:mm:ss',
      reset: 'Reset',
      pause: 'Pause',
      start: 'Start',
      finished: 'Finished',
    },
  },

  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },

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
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-count-down {
  background-color: @white;

  .ghb-count-down {
    margin-left: @padding-md;
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @red;
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @red;
    border-radius: 4px;
  }

  .ghb-grid {
    margin-top: 10px;
  }
}
</style>
