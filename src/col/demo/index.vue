<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-row>
        <ghb-col span="8">span: 8</ghb-col>
        <ghb-col span="8">span: 8</ghb-col>
        <ghb-col span="8">span: 8</ghb-col>
      </ghb-row>

      <ghb-row>
        <ghb-col span="4">span: 4</ghb-col>
        <ghb-col span="10" offset="4"> offset: 4, span: 10 </ghb-col>
      </ghb-row>

      <ghb-row>
        <ghb-col offset="12" span="12"> offset: 12, span: 12 </ghb-col>
      </ghb-row>
    </demo-block>

    <demo-block :title="t('title2')">
      <ghb-row gutter="20">
        <ghb-col span="8">span: 8</ghb-col>
        <ghb-col span="8">span: 8</ghb-col>
        <ghb-col span="8">span: 8</ghb-col>
      </ghb-row>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title3')">
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
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局',
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  background: @white;

  .ghb-doc-demo-block {
    padding: 0 @padding-md;
  }

  .ghb-doc-demo-block__title {
    padding-left: 0;
  }

  .ghb-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
