import Mock from 'mockjs2';
import { get, post } from '../request.js';

// 获取邮箱验证码
const sign = post('/user/sign');

export default {
  sign,
};
