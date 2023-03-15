<template>
  <demo-section>
    <ghb-grid :column-num="2" :border="false">
      <ghb-grid-item>
        <h3 class="demo-sidebar-title">{{ t('basicUsage') }}</h3>
        <ghb-sidebar v-model="activeKey1">
          <ghb-sidebar-item :title="t('title')" />
          <ghb-sidebar-item :title="t('title')" />
          <ghb-sidebar-item :title="t('title')" />
        </ghb-sidebar>
      </ghb-grid-item>

      <ghb-grid-item>
        <h3 class="demo-sidebar-title">{{ t('showBadge') }}</h3>
        <ghb-sidebar v-model="activeKey2">
          <ghb-sidebar-item :title="t('title')" dot />
          <ghb-sidebar-item :title="t('title')" badge="5" />
          <ghb-sidebar-item :title="t('title')" badge="99+" />
        </ghb-sidebar>
      </ghb-grid-item>

      <ghb-grid-item>
        <h3 class="demo-sidebar-title">{{ t('disabled') }}</h3>
        <ghb-sidebar v-model="activeKey3">
          <ghb-sidebar-item :title="t('title')" />
          <ghb-sidebar-item :title="t('title')" disabled />
          <ghb-sidebar-item :title="t('title')" />
        </ghb-sidebar>
      </ghb-grid-item>

      <ghb-grid-item>
        <h3 class="demo-sidebar-title">{{ t('changeEvent') }}</h3>
        <ghb-sidebar v-model="activeKey4" @change="onChange">
          <ghb-sidebar-item :title="t('title') + 1" />
          <ghb-sidebar-item :title="t('title') + 2" />
          <ghb-sidebar-item :title="t('title') + 3" />
        </ghb-sidebar>
      </ghb-grid-item>
    </ghb-grid>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名',
      showBadge: '徽标提示',
      disabled: '禁用选项',
      changeEvent: '监听切换事件',
      selectTip: '你切换到了',
    },
    'en-US': {
      showBadge: 'Show Badge',
      disabled: 'Disabled',
      changeEvent: 'Change Event',
      selectTip: 'You select ',
    },
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0,
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: 'primary',
        message: `${this.t('selectTip')} ${this.t('title')}${index + 1}`,
      });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .ghb-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-6;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
