<template>
  <demo-section>
    <ghb-tabs v-model="activeTab">
      <ghb-tab :title="t('basicUsage')">
        <ghb-index-bar>
          <div v-for="index in indexList" :key="index">
            <ghb-index-anchor :index="index" />
            <ghb-cell :title="t('text')" />
            <ghb-cell :title="t('text')" />
            <ghb-cell :title="t('text')" />
          </div>
        </ghb-index-bar>
      </ghb-tab>

      <ghb-tab :title="t('customIndexList')">
        <ghb-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <ghb-index-anchor :index="index">
              {{ t('title') + index }}
            </ghb-index-anchor>
            <ghb-cell :title="t('text')" />
            <ghb-cell :title="t('text')" />
            <ghb-cell :title="t('text')" />
          </div>
        </ghb-index-bar>
      </ghb-tab>
    </ghb-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表',
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List',
    },
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);

    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    };
  },
};
</script>
