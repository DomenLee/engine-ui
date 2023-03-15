<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <ghb-tabs v-model="active">
        <ghb-tab name="error" :title="t('error')">
          <ghb-empty image="error" :description="t('description')" />
        </ghb-tab>
        <ghb-tab name="network" :title="t('network')">
          <ghb-empty image="network" :description="t('description')" />
        </ghb-tab>
        <ghb-tab name="search" :title="t('search')">
          <ghb-empty image="search" :description="t('description')" />
        </ghb-tab>
      </ghb-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <ghb-empty
        class="custom-image"
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <ghb-empty :description="t('description')">
        <ghb-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </ghb-button>
      </ghb-empty>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      error: '通用错误',
      search: '搜索提示',
      network: '网络错误',
      imageType: '图片类型',
      description: '描述文字',
      customImage: '自定义图片',
      bottomContent: '底部内容',
    },
    'en-US': {
      error: 'Error',
      search: 'Search',
      network: 'Network',
      imageType: 'Image Type',
      description: 'Description',
      customImage: 'Custom Image',
      bottomContent: 'Bottom Content',
    },
  },

  data() {
    return {
      active: 'error',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-empty {
  background: @white;

  .custom-image {
    .ghb-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
