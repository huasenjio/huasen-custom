/*
 * @Autor: huasenjio
 * @Date: 2021-10-08 16:30:57
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-13 22:44:19
 * @Description: 共用中间件
 */

const JWT = require('../plugin/jwt.js');
const { rsaDecryptLong } = require('../utils/rsa.js');

// 预处理传递的参数
function handleRequestParams(req, res, next) {
  let { query, body } = req;
  // post请求使用非对称加密，需要使用私钥解密
  if (req.method === 'POST' && body.secretMethod === 'rsa') {
    try {
      let raw = rsaDecryptLong('private', body.secretText, 117);
      body = JSON.parse(raw);
    } catch (err) {
      next(err);
    }
  }
  // 合并参数
  req.huasenParams = Object.assign(query, body);
  next();
}

// 预处理请求携带的凭证信息
function handleJWT(req, res, next) {
  let token = req.get('token');
  JWT.verifyToken(token)
    .then(({ data }) => {
      // 注入到请求对象
      req.huasenJWT = {
        token: token,
        proof: data,
      };
      next();
    })
    .catch(err => {
      req.huasenJWT = {
        token: token,
        proof: {
          key: '',
          code: '0',
        },
      };
      next();
    });
}

// 移除异常参数
function handleUselessParams(req, res, next) {
  Object.keys(req.huasenParams).forEach(key => {
    let value = req.huasenParams[key];
    if (value === '' || value === null || value === undefined || value === 'null' || value === 'undefined') {
      delete req.huasenParams[key];
    }
  });
  next();
}

// 错误处理中间件
const handleRequestError = function (err, req, res, next) {
  // 返回到客户端
  global.huasen.responseData(res, {}, 'ERROR', '发生未知错误', false);
  // 记录错误日志
  global.huasen.formatError(err, '全局错误处理中间件发现错误');
};

module.exports = {
  handleRequestParams,
  handleUselessParams,
  handleRequestError,
  handleJWT,
};
