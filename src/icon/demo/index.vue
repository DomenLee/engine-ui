<template>
  <demo-section>
    <ghb-tabs v-model="tab" sticky>
      <ghb-tab :title="t('demo')">
        <demo-block :title="t('basicUsage')">
          <ghb-col span="6" @click="copy(demoIcon)">
            <ghb-icon :name="demoIcon" />
          </ghb-col>
          <ghb-col span="6" @click="copy(demoImage)">
            <ghb-icon :name="demoImage" />
          </ghb-col>
        </demo-block>

        <demo-block :title="t('badge')">
          <ghb-col span="6" @click="copy(demoIcon, { dot: true })">
            <ghb-icon :name="demoIcon" dot />
          </ghb-col>
          <ghb-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <ghb-icon :name="demoIcon" badge="9" />
          </ghb-col>
          <ghb-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <ghb-icon :name="demoIcon" badge="99+" />
          </ghb-col>
        </demo-block>

        <demo-block :title="t('color')">
          <ghb-col span="6" @click="copy(demoIcon, { color: '#1989fa' })">
            <ghb-icon name="cart-o" color="#1989fa" />
          </ghb-col>
          <ghb-col span="6" @click="copy(demoIcon, { color: RED })">
            <ghb-icon name="fire-o" :color="RED" />
          </ghb-col>
        </demo-block>

        <demo-block :title="t('size')">
          <ghb-col span="6" @click="copy(demoIcon, { size: '40' })">
            <ghb-icon :name="demoIcon" size="40" />
          </ghb-col>
          <ghb-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <ghb-icon :name="demoIcon" size="3rem" />
          </ghb-col>
        </demo-block>
      </ghb-tab>

      <ghb-tab :title="t('basic')">
        <ghb-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <ghb-icon :name="icon" />
          <span>{{ icon }}</span>
        </ghb-col>
      </ghb-tab>

      <ghb-tab :title="t('outline')">
        <ghb-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <ghb-icon :name="icon" />
          <span>{{ icon }}</span>
        </ghb-col>
      </ghb-tab>

      <ghb-tab :title="t('filled')">
        <ghb-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <ghb-icon :name="icon" />
          <span>{{ icon }}</span>
        </ghb-col>
      </ghb-tab>
    </ghb-tabs>
  </demo-section>
</template>

<script>
import icons from '@vant/icons';
import { RED } from '../../utils/constant';

// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      badge: '徽标提示',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小',
    },
    'en-US': {
      title: 'Icon List',
      badge: 'Show Badge',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size',
    },
  },

  data() {
    this.RED = RED;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  },

  methods: {
    copy(icon, option = {}) {
      let tag = `<ghb-icon name="${icon}"`;
      if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
      }
      if ('badge' in option) {
        tag = `${tag} badge="${option.badge}"`;
      }
      if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.t('copied')}：${tag}`,
      });
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13px;
  }

  .ghb-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .ghb-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .ghb-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
