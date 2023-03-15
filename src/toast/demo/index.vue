<template>
  <demo-section>
    <demo-block card :title="t('basicUsage')">
      <ghb-cell is-link :title="t('title1')" @click="$toast(t('text'))" />
      <ghb-cell is-link :title="t('title2')" @click="showLoadingToast()" />
      <ghb-cell is-link :title="t('success')" @click="showSuccessToast" />
      <ghb-cell is-link :title="t('fail')" @click="showFailToast" />
    </demo-block>

    <demo-block card v-if="!isWeapp" :title="t('customIcon')">
      <ghb-cell is-link :title="t('customIcon')" @click="showIconToast" />
      <ghb-cell is-link :title="t('customImage')" @click="showImageToast" />
      <ghb-cell
        is-link
        :title="t('loadingType')"
        @click="showLoadingToast('spinner')"
      />
    </demo-block>

    <demo-block card v-if="!isWeapp" :title="t('customPosition')">
      <ghb-cell is-link :title="t('positionTop')" @click="showTopToast" />
      <ghb-cell is-link :title="t('positionBottom')" @click="showBottomToast" />
    </demo-block>

    <demo-block card :title="t('updateMessage')">
      <ghb-cell
        is-link
        :title="t('updateMessage')"
        @click="showCustomizedToast"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fail: '失败提示',
      text: '提示内容',
      text2: '成功文案',
      text3: '失败文案',
      text4: (second) => `倒计时 ${second} 秒`,
      title1: '文字提示',
      title2: '加载提示',
      title3: '成功/失败提示',
      success: '成功提示',
      customIcon: '自定义图标',
      customImage: '自定义图片',
      loadingType: '自定义加载图标',
      positionTop: '顶部展示',
      updateMessage: '动态更新提示',
      positionBottom: '底部展示',
      customPosition: '自定义位置',
    },
    'en-US': {
      fail: 'Fail',
      text: 'Some messages',
      text2: 'Success',
      text3: 'Fail',
      text4: (second) => `${second} seconds`,
      title1: 'Text',
      title2: 'Loading',
      title3: 'Success/Fail',
      success: 'Success',
      customIcon: 'Custom Icon',
      customImage: 'Custom Image',
      loadingType: 'Loading Type',
      positionTop: 'Top',
      updateMessage: 'Update Message',
      positionBottom: 'Bottom',
      customPosition: 'Custom Position',
    },
  },

  methods: {
    showLoadingToast(loadingType) {
      this.$toast.loading({
        forbidClick: true,
        message: this.t('loading'),
        loadingType,
      });
    },

    showSuccessToast() {
      this.$toast.success(this.t('text2'));
    },

    showFailToast() {
      this.$toast.fail(this.t('text3'));
    },

    showTopToast() {
      this.$toast({
        message: this.t('positionTop'),
        position: 'top',
      });
    },

    showBottomToast() {
      this.$toast({
        message: this.t('positionBottom'),
        position: 'bottom',
      });
    },

    showIconToast() {
      this.$toast({
        message: this.t('customIcon'),
        icon: 'like-o',
      });
    },

    showImageToast() {
      this.$toast({
        message: this.t('customImage'),
        icon: 'https://img01.yzcdn.cn/vant/logo.png',
      });
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: this.t('text4', 3),
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.t('text4', second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    },
  },
};
</script>
