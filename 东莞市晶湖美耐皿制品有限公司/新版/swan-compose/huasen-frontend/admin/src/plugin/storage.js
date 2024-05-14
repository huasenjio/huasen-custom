/*
 * @Autor: huasenjio
 * @Date: 2021-11-27 13:23:33
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-17 18:24:29
 * @Description:
 */
class Storage {
  constructor() {
    this.saveType = 'session';
    this.saver = sessionStorage;
  }

  /**
   * 存储数据
   * @param {string} key - 存储句柄
   * @param {*} value - 数据
   * @param {number} expireTime - 过期时间，，单位毫秒，不传永久存储
   */
  setItem(key, value, expireTime) {
    this.saver.setItem(
      key,
      JSON.stringify({
        value: value,
        expired: expireTime === undefined ? undefined : Date.now() + 1000 + expireTime,
      }),
    );
  }

  /**
   * 获取存储数据
   * @param {string} key - 存储句柄
   * @returns {(*|undefined)} 存储内容
   */
  getItem(key) {
    if (!this.saver.getItem(key)) {
      return;
    }
    const item = JSON.parse(this.saver.getItem(key));
    if (item.expired === undefined || Date.now() < item.expired) {
      return item.value;
    } else {
      this.saver.removeItem(key);
    }
  }

  /**
   * 删除存储数据
   * @param {string} key - 存储句柄
   */
  removeItemByKey(key) {
    if (key === undefined || key === null || key === '' || key === 0) return;
    this.saver.removeItem(key);
  }

  /**
   * 清理全部数据
   */
  clear(msg) {
    msg = msg || '您确定清除本地所有存储数据吗？';
    let flag = confirm(msg);
    if (flag) {
      this.saver.clear();
      window.location.reload();
    }
  }
}

export default new Storage();
