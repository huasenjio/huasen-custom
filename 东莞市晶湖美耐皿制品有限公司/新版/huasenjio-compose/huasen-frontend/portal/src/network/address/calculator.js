import Mock from 'mockjs2';
import { get, post } from '../request.js';

const getOptions = post('/calculate/getOptions');

export default {
  getOptions,
};
