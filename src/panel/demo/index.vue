<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </ghb-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <ghb-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
        <template #footer>
          <ghb-button size="small">{{ t('button') }}</ghb-button>
          <ghb-button size="small" type="danger">
            {{ t('button') }}
          </ghb-button>
        </template>
      </ghb-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .ghb-panel__footer {
    text-align: right;

    .ghb-button {
      margin-left: 5px;
    }
  }

  .ghb-panel__content {
    padding: 20px;
  }
}
</style>
