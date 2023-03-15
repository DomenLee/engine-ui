<template>
  <demo-section>
    <demo-block :title="t('type')">
      <ghb-loading />
      <ghb-loading type="spinner" />
    </demo-block>

    <demo-block :title="t('color')">
      <ghb-loading color="#1989fa" />
      <ghb-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block :title="t('size')">
      <ghb-loading size="24" />
      <ghb-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="t('text')">
      <ghb-loading size="24px">
        {{ t('loading') }}
      </ghb-loading>
    </demo-block>

    <demo-block :title="t('vertical')">
      <ghb-loading size="24px" vertical>
        {{ t('loading') }}
      </ghb-loading>
    </demo-block>

    <demo-block :title="t('textColor')">
      <ghb-loading size="24px" vertical color="#0094ff">
        {{ t('loading') }}
      </ghb-loading>
      <ghb-loading size="24px" vertical text-color="#0094ff">
        {{ t('loading') }}
      </ghb-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      text: '加载文案',
      size: '自定义大小',
      color: '自定义颜色',
      vertical: '垂直排列',
      textColor: '自定义文本颜色',
    },
    'en-US': {
      type: 'Type',
      text: 'Text',
      size: 'Size',
      color: 'Color',
      vertical: 'Vertical',
      textColor: 'Text Color',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-loading {
  background: @white;

  .ghb-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
