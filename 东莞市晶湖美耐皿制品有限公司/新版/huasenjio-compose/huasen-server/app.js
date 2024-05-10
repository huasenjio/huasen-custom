/*
 * @Autor: huasenjio
 * @Date: 2021-08-21 21:07:58
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-21 23:18:21
 * @Description: 程序入口文件
 */

const express = require('express');
const path = require('path');
const app = express();

// 启动端口
const { SITE, PORT_SERVER } = require('./config.js');

// 引入程序
require('./mongodb/db.js');
require('./plugin/log.js');
require('./global/index.js');

// 解决cors跨域问题
const cors = require('cors'); // cors跨域插件
app.use(cors());

// 请求体解析器
const bodyparser = require('body-parser');
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: false }));

// 配置静态资源目录
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/huasen-store', express.static(path.join(__dirname, '../huasen-store')));

// 全局中间件
const { handleRequestError, handleRequestParams } = require('./middleware/common.middleware.js');
// 全局拦截
app.use(handleRequestParams);

// 引入用户路由
const calculateRouter = require('./router/calculate.router.js');
app.use('/calculate', calculateRouter);
const UserRouter = require('./router/user.router.js');
app.use('/user', UserRouter);

// 404页面重定向
app.get('*', function (req, res) {
  res.redirect(SITE.redirectURL);
});

//  全局处理错误
app.use(handleRequestError);

// 启动服务
app.listen(PORT_SERVER, () => {
  console.log(`express：${PORT_SERVER}`);
});

// 全局未捕获的异常
process.on('uncaughtException', function (err) {
  global.huasen.formatError(err, '未捕获的全局错误');
});
