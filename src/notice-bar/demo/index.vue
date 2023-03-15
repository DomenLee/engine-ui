<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-notice-bar :text="t('text')" scrollable left-icon="volume-o" />
    </demo-block>

    <demo-block :title="t('scrollable')">
      <ghb-notice-bar scrollable :text="t('shortText')" />
      <ghb-notice-bar :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('wrapable')">
      <ghb-notice-bar wrapable :scrollable="false" :text="t('text')" />
    </demo-block>

    <demo-block :title="t('mode')">
      <ghb-notice-bar mode="closeable" :text="t('shortText')" />
      <ghb-notice-bar mode="link" :text="t('shortText')" />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <ghb-notice-bar
        :text="t('shortText')"
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
      />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('verticalScroll')">
      <ghb-notice-bar left-icon="volume-o" :scrollable="false">
        <ghb-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <ghb-swipe-item>{{ t('content') }} 1</ghb-swipe-item>
          <ghb-swipe-item>{{ t('content') }} 2</ghb-swipe-item>
          <ghb-swipe-item>{{ t('content') }} 3</ghb-swipe-item>
        </ghb-swipe>
      </ghb-notice-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      mode: '通知栏模式',
      content: '内容',
      wrapable: '多行展示',
      shortText: '技术是开发它的人的共同灵魂。',
      scrollable: '滚动播放',
      customStyle: '自定义样式',
      verticalScroll: '垂直滚动',
    },
    'en-US': {
      text: 'Technology is the common soul of the people who developed it.',
      mode: 'Mode',
      content: 'Content',
      wrapable: 'Wrapable',
      shortText: 'Some short text.',
      customStyle: 'Custom Style',
      scrollable: 'Scrollable',
      verticalScroll: 'Vertical Scroll',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-notice-bar {
  background: @white;

  .ghb-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .ghb-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
