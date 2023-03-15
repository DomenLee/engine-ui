<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-tabs v-model="active">
        <ghb-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('matchByName')">
      <ghb-tabs v-model="activeName">
        <ghb-tab name="a" :title="t('tab') + 1"> {{ t('content') }} 1 </ghb-tab>
        <ghb-tab name="b" :title="t('tab') + 2"> {{ t('content') }} 2 </ghb-tab>
        <ghb-tab name="c" :title="t('tab') + 3"> {{ t('content') }} 3 </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title2')">
      <ghb-tabs>
        <ghb-tab v-for="index in 8" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title3')">
      <ghb-tabs @disabled="onClickDisabled">
        <ghb-tab
          v-for="index in 3"
          :title="t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title4')">
      <ghb-tabs type="card">
        <ghb-tab v-for="index in 3" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title5')">
      <ghb-tabs @click="onClick">
        <ghb-tab v-for="index in 2" :title="t('tab') + index" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title6')">
      <ghb-tabs :active="active" sticky>
        <ghb-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title7')">
      <ghb-tabs :active="active">
        <ghb-tab v-for="index in 2" :key="index">
          <template #title> <ghb-icon name="more-o" />{{ t('tab') }} </template>
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title8')">
      <ghb-tabs animated>
        <ghb-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('title9')">
      <ghb-tabs :active="active" swipeable>
        <ghb-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('title10')">
      <ghb-tabs scrollspy sticky>
        <ghb-tab :title="t('tab') + index" v-for="index in 8" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('beforeChange')">
      <ghb-tabs :before-change="beforeChange">
        <ghb-tab :title="t('tab') + index" v-for="index in 4" :key="index">
          {{ t('content') }} {{ index }}
        </ghb-tab>
      </ghb-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      title10: '滚动导航',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配',
      beforeChange: '异步切换',
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      title10: 'Scrollspy',
      disabled: ' is disabled',
      matchByName: 'Match By Name',
      beforeChange: 'Before Change',
    },
  },

  data() {
    return {
      active: 2,
      activeName: 'b',
      tabs: [1, 2, 3, 4],
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    beforeChange(name) {
      if (name === 1) {
        return false;
      }

      return new Promise((resolve) => {
        resolve(name !== 3);
      });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 80vh;

  .ghb-tab .ghb-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .ghb-tab__pane {
    padding: 24px 20px;
    background-color: @white;
  }

  .ghb-tabs--card .ghb-tab__pane {
    background-color: transparent;
  }
}
</style>
