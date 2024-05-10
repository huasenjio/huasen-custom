const Mock = require('mockjs2');
import { get, post, upload } from '../request.js';

const login = post('/user/login');
const findByPage = post('user/findByPage');
const remove = post('user/remove');
const update = post('user/update');
const add = post('user/add');

export { login, findByPage, remove, update, add };
