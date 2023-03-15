<p align="center">
    <img alt="logo" src="https://img01.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">GHBUI</h1>

<p align="center">轻量、可靠的移动端 Vue 组件库</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/github/workflow/status/vant-ui/vant/CI/dev?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/vant-ui/vant/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/vant?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

<p align="center">
  🔥 <a href="https://vant-contrib.gitee.io/vant">文档网站</a>
  &nbsp;
  &nbsp;
  🚀 <a href="https://github.com/vant-ui/vant-weapp" target="_blank">小程序版</a>
</p>

---

### 介绍

GHBUI 是一个**轻量、可靠的移动端组件库**，于 2017 年开源。

目前 GHBUI 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant/v2)、[Vue 3 版本](https://vant-contrib.gitee.io/vant)和[微信小程序版本](http://vant-contrib.gitee.io/vant-weapp)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)和[支付宝小程序版本](https://github.com/ant-move/GHBUI-Aliapp)。

## 特性

- 🚀 性能极佳，组件平均体积小于 1KB（min+gzip）
- 🚀 65+ 个高质量组件，覆盖移动端主流场景
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 💪 单元测试覆盖率超过 90%，提供稳定性保障
- 📖 提供完善的中英文文档和组件示例
- 📖 提供 Sketch 和 Axure 设计资源
- 🍭 支持 Vue 2、Vue 3 和微信小程序
- 🍭 支持主题定制，内置 700+ 个主题变量
- 🍭 支持按需引入和 Tree Shaking
- 🍭 支持服务器端渲染
- 🌍 支持国际化和语言包定制

## 安装

```bash
# Vue 2 项目，安装 GHBUI：
npm i ghbui@latest -S
```

## 快速上手

```js
import Vue from 'vue';
import { Button } from 'ghbui';
import 'ghbui/lib/index.css';

Vue.use(Button);
```

## 疑难解答

使用过程中发现任何问题都可以提 [Issue](https://github.com/vant-ui/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/vant-ui/vant/pulls)。

## 浏览器支持

GHBUI 6 支持现代浏览器以及 Android >= 4.0、iOS >= 8.0。基于 Vue2.x。
