/*
 * @Autor: huasenjio
 * @Date: 2021-08-21 21:07:58
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-21 23:51:39
 * @Description:
 */
const mongoose = require('mongoose'); // 引入数据库模块
const { MODE, DB } = require('../config.js'); // 配置文件
mongoose.set('useCreateIndex', true); // 配置设置
// 官方示例
// mongodb://username:password@host:port/database?options

let mongoUrl = null;

if (DB.dbDirConnection) {
  mongoUrl = `mongodb://${DB.name}:${DB.password}@${DB.ip}:${DB.port}/${DB.dbName}?authSource=${DB.dbName}`;
} else {
  mongoUrl = `mongodb://${DB.name}:${DB.password}@${DB.ip}/${DB.dbName}?authSource=${DB.dbName}`;
}

// 连接配置
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

global.huasenMongo = db;

db.on('error', err => {
  console.log('数据库连接错误', err);
});

db.once('open', () => {
  // 每次启动初始化数据库默认数据
  require('./init/user.js');
  require('./init/calculate-option.js');
  // 提示数据库启动
  console.log(`mongodb：${DB.port}`);
});
