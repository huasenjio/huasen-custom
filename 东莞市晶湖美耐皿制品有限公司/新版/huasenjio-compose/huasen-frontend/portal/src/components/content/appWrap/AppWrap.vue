<!--
 * @Autor: huasenjio
 * @Date: 2022-07-31 21:51:50
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-13 00:07:49
 * @Description: 框架组件
-->
<template>
  <div class="app-wrap">
    <router-view></router-view>
    <SignDialog></SignDialog>
  </div>
</template>
<script>
import SignDialog from '../signDialog/SignDialog.vue';
export default {
  name: 'AppWrap',

  components: {
    SignDialog,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--gray-0);
}
</style>
