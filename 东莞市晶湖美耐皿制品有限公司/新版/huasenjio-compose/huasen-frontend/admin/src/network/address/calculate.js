const Mock = require('mockjs2');
import { get, post, upload } from '../request.js';

const getOptions = post('/calculate/getOptions');
const update = post('calculate/update');

export { getOptions, update };
