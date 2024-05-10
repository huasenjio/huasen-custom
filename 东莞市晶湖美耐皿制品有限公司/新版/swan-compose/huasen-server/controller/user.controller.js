const User = require('../mongodb/model/user.js');
const JWT = require('../plugin/jwt.js');

async function sign(req, res, next) {
  try {
    let { id, password } = req.huasenParams;
    let list = await User.find({ id });
    let exist = list.find(item => item.id === id);
    if (!!!exist) {
      global.huasen.responseData(res, {}, 'ERROR', '用户不存在', false);
    } else if (password === exist.password) {
      // 登录成功
      let token = await JWT.createToken(id, { key: id, code: exist.code });
      global.huasen.responseData(
        res,
        {
          id,
          token,
          code: exist.code,
        },
        'SUCCESS',
        '登录成功',
        false,
      );
    } else {
      global.huasen.responseData(res, {}, 'ERROR', '账号密码不一致', false);
    }
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '登录失败', false);
  }
}

async function login(req, res, next) {
  try {
    let { id, password } = req.huasenParams;
    let list = await User.find({ id });
    let exist = list.find(item => item.id === id);
    if (!!!exist) {
      global.huasen.responseData(res, {}, 'ERROR', '用户不存在', false);
    } else if (password === exist.password) {
      if (exist.code === '1') {
        // 登录成功
        let token = await JWT.createToken(id, { key: id, code: exist.code });
        global.huasen.responseData(
          res,
          {
            id,
            token,
            code: exist.code,
          },
          'SUCCESS',
          '登录成功',
          false,
        );
      } else {
        global.huasen.responseData(res, {}, 'ERROR', '账号权限不足', false);
      }
    } else {
      global.huasen.responseData(res, {}, 'ERROR', '账号密码不一致', false);
    }
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '登录失败', false);
  }
}

async function findByPage(req, res, next) {
  try {
    let { pageNo, pageSize, id, code, name } = req.huasenParams;
    pageNo = Number(pageNo) || 1;
    pageSize = Number(pageSize) || 10;
    let target = { id: { $regex: new RegExp(id, 'i') }, name: { $regex: new RegExp(name, 'i') } };
    if (code !== '' && code !== undefined && code !== null) {
      target.code = code;
    }
    let list = await User.find(target)
      .limit(pageSize)
      .skip((pageNo - 1) * pageSize);
    let total = await User.find(target).countDocuments();
    global.huasen.responseData(res, { list, total }, 'SUCCESS', '请求成功', false);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '请求失败', false);
  }
}

async function remove(req, res, next) {
  try {
    let { _id } = req.huasenParams;
    let result = await User.deleteOne({ _id });
    global.huasen.responseData(res, result, 'SUCCESS', '删除成功', false);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '删除失败', false);
  }
}

async function update(req, res, next) {
  try {
    let { _id } = req.huasenParams;
    let result = await User.updateOne({ _id }, { $set: req.huasenParams }, { runValidators: true });
    global.huasen.responseData(res, result, 'SUCCESS', '更新成功', true);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '更新失败', false);
  }
}

async function add(req, res, next) {
  try {
    let { id } = req.huasenParams;
    let list = await User.find({ id });
    let exist = list.find(item => item.id === id);
    if (!!!exist) {
      let result = await User.insertMany(req.huasenParams);
      global.huasen.responseData(res, result, 'SUCCESS', '新增成功', false);
    } else {
      global.huasen.responseData(res, {}, 'ERROR', '用户已存在', false);
    }
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '新增失败', false);
  }
}

module.exports = {
  sign,
  login,
  findByPage,
  remove,
  update,
  add,
};
