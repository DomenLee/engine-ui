<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <ghb-grid>
        <ghb-grid-item
          v-for="i in 4"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
      <ghb-grid :column-num="3">
        <ghb-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
      <ghb-grid :border="false" :column-num="3">
        <ghb-grid-item>
          <ghb-image
            fit="contain"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
          />
        </ghb-grid-item>
        <ghb-grid-item>
          <ghb-image
            fit="contain"
            src="https://img01.yzcdn.cn/vant/apple-2.jpg"
          />
        </ghb-grid-item>
        <ghb-grid-item>
          <ghb-image
            fit="contain"
            src="https://img01.yzcdn.cn/vant/apple-3.jpg"
          />
        </ghb-grid-item>
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('square')">
      <ghb-grid square>
        <ghb-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
      <ghb-grid :gutter="10">
        <ghb-grid-item
          v-for="i in 8"
          :key="i"
          icon="photo-o"
          :text="t('text')"
        />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('horizontal')">
      <ghb-grid direction="horizontal" :column-num="3">
        <ghb-grid-item icon="photo-o" :text="t('text')" />
        <ghb-grid-item icon="photo-o" :text="t('text')" />
        <ghb-grid-item icon="photo-o" :text="t('text')" />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('route')">
      <ghb-grid clickable :column-num="2">
        <ghb-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
        <ghb-grid-item
          icon="search"
          :text="t('urlRoute')"
          url="/vant/mobile.html"
        />
      </ghb-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
      <ghb-grid :column-num="2">
        <ghb-grid-item icon="home-o" :text="t('text')" dot />
        <ghb-grid-item icon="search" :text="t('text')" badge="99+" />
      </ghb-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showBadge: '徽标提示',
      horizontal: '内容横排',
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showBadge: 'Show Badge',
      horizontal: 'Horizontal',
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
</style>
