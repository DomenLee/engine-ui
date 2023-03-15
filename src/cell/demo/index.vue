<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-cell-group>
        <ghb-cell :title="t('cell')" :value="t('content')" />
        <ghb-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </ghb-cell-group>
    </demo-block>

    <demo-block :title="t('insetGrouped')">
      <ghb-cell-group inset>
        <ghb-cell :title="t('cell')" :value="t('content')" />
        <ghb-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </ghb-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <ghb-cell :title="t('cell')" :value="t('content')" size="large" />
      <ghb-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <ghb-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('valueOnly')">
      <ghb-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <ghb-cell :title="t('cell')" is-link />
      <ghb-cell :title="t('cell')" is-link :value="t('content')" />
      <ghb-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <ghb-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <ghb-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <ghb-cell-group :title="`${t('group')} 1`">
        <ghb-cell :title="t('cell')" :value="t('content')" />
      </ghb-cell-group>
      <ghb-cell-group :title="`${t('group')} 2`">
        <ghb-cell :title="t('cell')" :value="t('content')" />
      </ghb-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <ghb-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <ghb-tag type="danger">{{ t('tag') }}</ghb-tag>
        </template>
      </ghb-cell>

      <ghb-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <ghb-icon name="search" class="search-icon" />
        </template>
      </ghb-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <ghb-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽',
      insetGrouped: '卡片风格',
      verticalCenter: '垂直居中',
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots',
      insetGrouped: 'Inset Grouped',
      verticalCenter: 'Vertical center',
    },
  },
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
