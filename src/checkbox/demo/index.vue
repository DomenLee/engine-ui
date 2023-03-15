<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-checkbox v-model="checkbox1">{{ t('checkbox') }}</ghb-checkbox>
    </demo-block>

    <demo-block :title="t('disabled')">
      <ghb-checkbox :value="false" disabled>
        {{ t('checkbox') }}
      </ghb-checkbox>
      <ghb-checkbox :value="true" disabled>
        {{ t('checkbox') }}
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('customShape')">
      <ghb-checkbox v-model="checkboxShape" shape="square">
        {{ t('customShape') }}
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('customColor')">
      <ghb-checkbox v-model="checkbox2" checked-color="#ee0a24">
        {{ t('customColor') }}
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('customIconSize')">
      <ghb-checkbox v-model="checboxIcon" icon-size="24px">
        {{ t('customIconSize') }}
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('customIcon')">
      <ghb-checkbox v-model="checkbox3">
        {{ t('customIcon') }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('disableLabel')">
      <ghb-checkbox v-model="checkboxLabel" label-disabled>
        {{ t('checkbox') }}
      </ghb-checkbox>
    </demo-block>

    <demo-block :title="t('title3')">
      <ghb-checkbox-group v-model="result">
        <ghb-checkbox name="a">{{ t('checkbox') }} a</ghb-checkbox>
        <ghb-checkbox name="b">{{ t('checkbox') }} b</ghb-checkbox>
      </ghb-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('horizontal')">
      <ghb-checkbox-group v-model="horizontalResult" direction="horizontal">
        <ghb-checkbox name="a">{{ t('checkbox') }} a</ghb-checkbox>
        <ghb-checkbox name="b">{{ t('checkbox') }} b</ghb-checkbox>
      </ghb-checkbox-group>
    </demo-block>

    <demo-block :title="t('title4')">
      <ghb-checkbox-group v-model="result2" :max="2">
        <ghb-checkbox name="a">{{ t('checkbox') }} a</ghb-checkbox>
        <ghb-checkbox name="b">{{ t('checkbox') }} b</ghb-checkbox>
        <ghb-checkbox name="c">{{ t('checkbox') }} c</ghb-checkbox>
      </ghb-checkbox-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('toggleAll')">
      <ghb-checkbox-group v-model="checkAllResult" ref="group">
        <ghb-checkbox name="a">{{ t('checkbox') }} a</ghb-checkbox>
        <ghb-checkbox name="b">{{ t('checkbox') }} b</ghb-checkbox>
        <ghb-checkbox name="c">{{ t('checkbox') }} c</ghb-checkbox>
      </ghb-checkbox-group>

      <div class="demo-checkbox-buttons">
        <ghb-button type="primary" @click="checkAll">
          {{ t('checkAll') }}
        </ghb-button>
        <ghb-button type="info" @click="toggleAll">
          {{ t('inverse') }}
        </ghb-button>
      </div>
    </demo-block>

    <demo-block :title="t('title5')">
      <ghb-checkbox-group v-model="result3">
        <ghb-cell-group>
          <ghb-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${t('checkbox')} ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <ghb-checkbox ref="checkboxes" :name="item" />
            </template>
          </ghb-cell>
        </ghb-cell-group>
      </ghb-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '限制最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      horizontal: '水平排列',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom Icon Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      horizontal: 'Horizontal',
      disableLabel: 'Disable label click',
    },
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },

    checkAll() {
      this.$refs.group.toggleAll(true);
    },

    toggleAll() {
      this.$refs.group.toggleAll();
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-checkbox {
  background: @white;

  .ghb-checkbox {
    margin: 0 0 8px 20px;
  }

  .ghb-cell {
    .ghb-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .ghb-button {
      margin-left: @padding-md;
    }
  }

  .ghb-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
