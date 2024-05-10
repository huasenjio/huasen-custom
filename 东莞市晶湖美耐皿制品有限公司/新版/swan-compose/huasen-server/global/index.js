/*
 * @Autor: huasenjio
 * @Date: 2022-10-01 14:55:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-16 21:34:16
 * @Description: 全局方法注入
 */

const { formatError } = require('../utils/error-handle.js');
const { formatResponseData, responseData } = require('../utils/response-handle');

// 挂载全局
global.huasen = {
  // 全局处理错误
  formatError,
  // 格式化返回对象
  formatResponseData,
  // 消息回复
  responseData,
};
