<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-cell-group>
        <ghb-switch-cell v-model="checked" :title="t('title')" />
      </ghb-cell-group>
    </demo-block>

    <demo-block :title="t('disabled')">
      <ghb-cell-group>
        <ghb-switch-cell v-model="checked" disabled :title="t('title')" />
      </ghb-cell-group>
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <ghb-cell-group>
        <ghb-switch-cell v-model="checked" loading :title="t('title')" />
      </ghb-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
