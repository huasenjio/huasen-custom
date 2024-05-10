/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-19 16:36:44
 * @Description:
 */

import Vue from 'vue';
const that = Vue.prototype;

export default {
  // 解析本地缓存的用户配置，若不存在，则采用仓库默认设定值
  initLocalUserInfo(context, payload) {
    try {
      // 获取本地存储数据
      let user = that.STORAGE.getItem(that.CONSTANT.localUser);
      // 本地存储有用户数据
      if (user) {
        // 提交更新
        context.commit('commitAll', {
          user: {
            id: user.id,
            name: user.name,
            code: user.code,
            token: user.token,
          },
          showWrapSign: false,
        });
      }
    } catch (err) {
      that.STORAGE.clear('数据异常，重置网站所有数据和功能，修复一切疑难杂症，您继续吗？');
    }
  },
  // 保存当前用户快照
  snapshoot(context, payload) {
    let { user } = context.state;
    that.STORAGE.setItem(that.CONSTANT.localUser, {
      id: user.id,
      name: user.name,
      code: user.code,
      token: user.token,
    });
  },
};
