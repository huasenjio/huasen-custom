const { ADMIN } = require('../../config.js');
const User = require('../model/user.js');

(() => {
  setTimeout(async () => {
    try {
      let users = await User.find();
      const haveAdmin = users.some(item => item.code === '1');
      if (!haveAdmin) {
        await User.insertMany([{ id: ADMIN.id, password: ADMIN.password, name: '默认管理员', code: '1' }]);
        console.log('创建默认管理员成功');
      }
    } catch (err) {
      console.log('创建默认管理员失败', err);
    }
  }, 1000);
})();
