/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-12-03 21:11:09
 * @Description: 统一配置请求拦截器
 */

import Vue from 'vue';
import state from '@/store/state/state.js';
const that = Vue.prototype;
let rsaPublicKey = null;

import { mockResponseFormat } from './utils.js';
import { rsaEncryptLong, rsaDecryptLong } from '@/plugin/rsa.js';

function requestIntercept(config) {
  // 开启遮罩
  that.$startLoading();
  // 用户埋点
  config.headers.dot = 'user';
  // 注入token
  config.headers.token = state.user.token;
  // 公钥加密
  if (rsaPublicKey && config.method === 'post' && config._secret && config.data) {
    let payload = {
      secretMethod: 'rsa',
      secretText: rsaEncryptLong('public', rsaPublicKey, JSON.stringify(config.data), 117),
    };
    config.data = payload;
  }
  // 放行参数
  return config;
}

function requestError(error) {
  // 发生错误时关闭重置遮罩
  that.$resetLoading();
  // 请求无法发出时的错误
  return Promise.reject(error);
}

function responseIntercept(result) {
  // 关闭遮罩
  that.$stopLoading();
  let { headers, config, status, data } = result;
  // 判断响应头类型，如果数据为二进制流，直接放行
  if (headers['content-type'] === 'application/octet-stream') {
    return result;
  }
  // 公钥解密
  if (headers['public-secret']) {
    let publicKey = Buffer.from(headers['public-secret'], 'base64').toString();
    // 存储公钥用于加密参数
    rsaPublicKey = publicKey;
    let raw = rsaDecryptLong('public', publicKey, data.data, 117);
    data.data = JSON.parse(raw);
  }
  // 针对mock请求，处理返回参数格式
  if (config._isMock) {
    data = mockResponseFormat(data);
  }
  // 正常的逻辑提示处理
  if (status === 200) {
    // 提示请求成功
    if (config._notify) that.$tips('success', data.msg, 'top-right', 1200);
    // 返回数据进入then
    return data;
  } else if (status === 204) {
    // 请求受理但是无返回
    if (config._errorNotify) that.$tips('warning', data.msg, 'top-right', 1200);
  }
  return Promise.reject(result);
}

function responseError(error) {
  // 发生错误时关闭重置遮罩
  that.$resetLoading();
  try {
    let { config, response } = error;
    if (!navigator.onLine) {
      // 无网络情况
      that.$tips('error', '请检查网络是否连接', 'top-right', 2000);
    } else if (response.status == 400) {
      // 请求异常
      if (config._errorNotify) that.$tips('error', response.data.msg, 'top-right', 2000);
    } else if (response.status == 401) {
      // 请求未认证，需要登录
      if (config._errorNotify) that.$tips('warning', response.data.msg, 'top-right', 2000);
    } else if (response.status == 403) {
      // 请求禁止，权限不够
      if (config._errorNotify) that.$tips('error', response.data.msg, 'top-right', 2000);
    } else {
      that.$tips('error', '服务器已经崩溃了', 'top-right', 2000);
    }
    return Promise.reject(error);
  } catch (err) {
    console.error('源异常', error);
    console.error('请求响应式器发生异常', err);
  }
}

export default {
  requestIntercept,
  responseIntercept,
  requestError,
  responseError,
};
