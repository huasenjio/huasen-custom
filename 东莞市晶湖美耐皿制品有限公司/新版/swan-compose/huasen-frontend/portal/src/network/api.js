/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-28 01:07:41
 * @Description: 统一导出请求接口
 */

// 引入mockjs2
import Mock from 'mockjs2';
// 封装的请求方法
import { get, post } from './request.js';

import Calculator from './address/calculator.js';
import User from './address/user.js';

// mock数据模拟功能示例
const mock = get('/mock/test', {
  // 随机5-10个对象的集合
  'persons|5-10': [
    {
      // “花” 随机重复 1-3
      'name|1-3': '花',
      // 随机返回true 或 false
      'status|1': true,
      // 由 1 为底依次递加 1
      'key|+1': 1,
      // 数组中选择其一返回
      'type|1': ['在线', '离线'],
      // 50*50 像素的图片
      'headIcon|': Mock.Random.image('50x50', '#ec7168', '花森'),
      // 随机生成119.36xxxxxx
      'longitude|119.8': 1.36,
      // 随机生成26.03xxxxxx
      'latitude|26.8': 1.03,
    },
  ],
});

export default {
  Calculator,
  User,
};
