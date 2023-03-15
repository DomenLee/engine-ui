<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-badge content="5">
        <div class="child" />
      </ghb-badge>
      <ghb-badge content="10">
        <div class="child" />
      </ghb-badge>
      <ghb-badge content="Hot">
        <div class="child" />
      </ghb-badge>
      <ghb-badge dot>
        <div class="child" />
      </ghb-badge>
    </demo-block>

    <demo-block :title="t('max')">
      <ghb-badge content="20" max="9">
        <div class="child" />
      </ghb-badge>
      <ghb-badge content="50" max="20">
        <div class="child" />
      </ghb-badge>
      <ghb-badge content="200" max="99">
        <div class="child" />
      </ghb-badge>
    </demo-block>

    <demo-block :title="t('customColor')">
      <ghb-badge content="5" color="#1989fa">
        <div class="child" />
      </ghb-badge>
      <ghb-badge content="10" color="#1989fa">
        <div class="child" />
      </ghb-badge>
      <ghb-badge dot color="#1989fa">
        <div class="child" />
      </ghb-badge>
    </demo-block>

    <demo-block :title="t('customContent')">
      <ghb-badge>
        <div class="child" />
        <template #content>
          <ghb-icon name="success" class="badge-icon" />
        </template>
      </ghb-badge>
      <ghb-badge>
        <div class="child" />
        <template #content>
          <ghb-icon name="cross" class="badge-icon" />
        </template>
      </ghb-badge>
      <ghb-badge>
        <div class="child" />
        <template #content>
          <ghb-icon name="down" class="badge-icon" />
        </template>
      </ghb-badge>
    </demo-block>

    <demo-block :title="t('standalone')">
      <ghb-badge content="20" style="margin-left: 16px" />
      <ghb-badge content="200" max="99" style="margin-left: 12px" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      max: '最大值',
      standalone: '独立展示',
      customColor: '自定义颜色',
      customContent: '自定义徽标内容',
    },
    'en-US': {
      max: 'Max',
      standalone: 'Standalone',
      customColor: 'Custom Color',
      customContent: 'Custom Content',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  background-color: @white;

  .ghb-badge__wrapper {
    margin-left: @padding-md;
  }

  .child {
    width: 40px;
    height: 40px;
    background: @gray-2;
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
