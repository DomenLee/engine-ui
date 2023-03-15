<template>
  <demo-block :title="t('basicUsage')">
    <ghb-cell-group>
      <ghb-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </ghb-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '文本',
      placeholder: '请输入文本',
    },
    'en-US': {
      label: 'Label',
      placeholder: 'Text',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
