<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-collapse v-model="active1">
        <ghb-collapse-item :title="t('title') + 1">
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 2">
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 3">
          {{ t('text') }}
        </ghb-collapse-item>
      </ghb-collapse>
    </demo-block>

    <demo-block :title="t('accordion')">
      <ghb-collapse v-model="active2" accordion>
        <ghb-collapse-item :title="t('title') + 1">
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 2">
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 3">
          {{ t('text') }}
        </ghb-collapse-item>
      </ghb-collapse>
    </demo-block>

    <demo-block :title="t('disabled')">
      <ghb-collapse v-model="active3">
        <ghb-collapse-item :title="t('title') + 1">
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 2" disabled>
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item :title="t('title') + 3" disabled>
          {{ t('text') }}
        </ghb-collapse-item>
      </ghb-collapse>
    </demo-block>

    <demo-block :title="t('titleSlot')">
      <ghb-collapse v-model="active4">
        <ghb-collapse-item>
          <template #title>
            {{ t('title') + 1 }}<ghb-icon name="question-o" />
          </template>
          {{ t('text') }}
        </ghb-collapse-item>
        <ghb-collapse-item
          :title="t('title') + 2"
          :value="t('content')"
          icon="shop-o"
        >
          {{ t('text') }}
        </ghb-collapse-item>
      </ghb-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行',
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content',
    },
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: [],
      active4: [],
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .ghb-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
