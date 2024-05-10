/*
 * @Autor: huasenjio
 * @Date: 2021-11-15 22:14:23
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-12-11 11:00:44
 * @Description:
 */
import { copyObject } from './copyObject';
import { copyTextToClip } from './copyTextToClip';
import { getBase64 } from './getBase64';
import { getCDN } from './getCDN';
import { getUploadURL } from './getUploadURL';
import { getUUID } from './getUUID';
import { handleSize } from './handleSize.js';
import { judgeIE } from './judgeIE';
import { timeout2Interval } from './timeout2Interval';
import { stringToMD5 } from './stringToMD5';
import { mergeByOwnKey } from './lodash-lib.js';

export default {
  copyObject,
  copyTextToClip,
  getBase64,
  getCDN,
  getUploadURL,
  getUUID,
  handleSize,
  judgeIE,
  timeout2Interval,
  stringToMD5,
  mergeByOwnKey,
};
