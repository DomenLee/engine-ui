<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-divider />
    </demo-block>

    <demo-block :title="t('withText')">
      <ghb-divider>
        {{ t('text') }}
      </ghb-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
      <ghb-divider content-position="left">
        {{ t('text') }}
      </ghb-divider>

      <ghb-divider content-position="right">
        {{ t('text') }}
      </ghb-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
      <ghb-divider dashed :hairline="false">
        {{ t('text') }}
      </ghb-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
      <ghb-divider
        :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
      >
        {{ t('text') }}
      </ghb-divider>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式',
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-divider {
  background-color: @white;

  .ghb-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
