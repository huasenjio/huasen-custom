const User = require('../mongodb/model/user.js');

// 检验管理员权限
async function checkAdminPower(req, res, next) {
  let { proof } = req.huasenJWT;
  let list = await User.find({ id: proof.key, code: '1' });
  if (list.length > 0) {
    next();
  } else {
    global.huasen.responseData(res, {}, 'FORBIDDEN', '账号权限不足', false);
  }
}

async function checkLoginPower(req, res, next) {
  let { proof } = req.huasenJWT;
  let list = await User.find({ id: proof.key });
  if (list.length > 0) {
    next();
  } else {
    global.huasen.responseData(res, {}, 'FORBIDDEN', '账号未登录', false);
  }
}

module.exports = {
  checkAdminPower,
  checkLoginPower,
};
