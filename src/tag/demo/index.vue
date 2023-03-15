<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <ghb-cell :title="`primary ${t('type')}`">
        <ghb-tag type="primary">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="`success ${t('type')}`">
        <ghb-tag type="success">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="`danger ${t('type')}`">
        <ghb-tag type="danger">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="`warning ${t('type')}`">
        <ghb-tag type="warning">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
    </demo-block>

    <demo-block card :title="t('tagStyle')">
      <ghb-cell :title="t('plain')">
        <ghb-tag plain type="primary">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('round')">
        <ghb-tag round type="primary">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('mark')">
        <ghb-tag mark type="primary">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('closeable')">
        <ghb-tag
          v-if="show"
          size="medium"
          closeable
          type="primary"
          @close="close"
        >
          {{ t('tag') }}
        </ghb-tag>
      </ghb-cell>
    </demo-block>

    <demo-block card :title="t('customSize')">
      <ghb-cell :title="t('smallSize')">
        <ghb-tag type="primary">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('mediumSize')">
        <ghb-tag type="primary" size="medium">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('largeSize')">
        <ghb-tag type="primary" size="large">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
    </demo-block>

    <demo-block card :title="t('customColor')">
      <ghb-cell :title="t('customBgColor')">
        <ghb-tag color="#7232dd">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('customTextColor')">
        <ghb-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</ghb-tag>
      </ghb-cell>
      <ghb-cell :title="t('customPlainColor')">
        <ghb-tag color="#7232dd" plain>{{ t('tag') }}</ghb-tag>
      </ghb-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '类型',
      mark: '标记样式',
      plain: '空心样式',
      round: '圆角样式',
      tagStyle: '样式风格',
      closeable: '可关闭标签',
      smallSize: '小号标签',
      largeSize: '大号标签',
      mediumSize: '中号标签',
      customSize: '标签大小',
      customColor: '自定义颜色',
      customBgColor: '背景颜色',
      customTextColor: '文字颜色',
      customPlainColor: '空心颜色',
    },
    'en-US': {
      mark: 'Mark style',
      plain: 'Plain style',
      round: 'Round style',
      tagStyle: 'Tag Style',
      closeable: 'Closeable',
      smallSize: 'Small Size',
      largeSize: 'Large Size',
      mediumSize: 'Medium Size',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
      customBgColor: 'Background Color',
      customTextColor: 'Text Color',
      customPlainColor: 'Plain Color',
    },
  },

  data() {
    return {
      show: true,
    };
  },

  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  .ghb-tag + .ghb-tag {
    margin-left: @padding-xs;
  }
}
</style>
