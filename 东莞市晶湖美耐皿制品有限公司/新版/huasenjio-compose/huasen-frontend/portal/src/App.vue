<!--
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-10-26 23:58:49
 * @Description: 入口文件
-->
<template>
  <div id="app" :style="appStyle">
    <BrowserTips v-if="!isSupport"></BrowserTips>
    <AppWrap v-else> </AppWrap>
  </div>
</template>

<script>
import AppWrap from '@/components/content/appWrap/AppWrap.vue';
import BrowserTips from '@/components/content/browserTips/BrowserTips.vue';

import { mapState, mapActions } from 'vuex';
import { initScaleDocument, destoryScaleDocument } from '@/plugin/scale-document.js';

export default {
  name: 'App',

  components: { AppWrap, BrowserTips },

  computed: {
    // 判断浏览器支持
    isSupport() {
      let temp = this.TOOL.judgeIE();
      console.log('浏览器信息：' + temp);
      if (temp === -1 || temp === 'edge') {
        return true;
      } else {
        return false;
      }
    },
    // 设置最小宽度
    appStyle() {
      return {
        minWidth: `${this.CONSTANT.appMinWidth}px`,
      };
    },
  },

  created() {
    // 移除开屏动画
    let loadingDOM = this.isSupport ? document.getElementById('js-app-loading__container--routine') : document.getElementById('js-app-loading__container--ie');
    if (loadingDOM) document.body.removeChild(loadingDOM);
    // 调整文档大小，避免网站在移动端网页中，无法适应屏幕的问题
    initScaleDocument();
  },

  mounted() {
    // 初始化本地数据
    this.$store.dispatch('initLocalUserInfo');
    console.log('页面已挂载成功');
  },

  destroyed() {
    destoryScaleDocument();
  },
};
</script>

<style lang="scss">
@import url('./assets/css/index.css');
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
