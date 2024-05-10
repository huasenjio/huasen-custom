/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-27 01:06:39
 * @Description: 统一注册自定义组件
 */

import Vue from 'vue';
// 引入组件
import Scrollbar from './scrollbar/Scrollbar.vue';

// 组件注册全局引入组件
Vue.component('HScrollbar', Scrollbar);
