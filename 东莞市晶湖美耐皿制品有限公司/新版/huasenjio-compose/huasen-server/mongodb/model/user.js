const mongoose = require('mongoose');
// 创建schema实例表对象
let UserSchema = new mongoose.Schema({
  // 登录邮箱
  id: {
    type: String,
    required: [true, '必需项'],
    minlength: [5, '账号长度不小于5'],
    maxlength: [20, '账号长度不大于50'],
    trim: [true, '剔除前后空格'],
    unique: [true, '唯一'],
  },

  // 登录密码
  password: {
    type: String,
    required: true,
    minlength: [5, '密码长度不小于5'],
    maxlength: [50, '密码长度不大于50'],
    trim: [true, '剔除前后空格'],
  },

  // 昵称
  name: {
    type: String,
    default: '初级花酱',
  },

  // 权限码，可选0、1，分别表示普通用户、管理员
  code: {
    type: String,
    default: '0',
    validate: {
      validator: function (desc) {
        try {
          desc = Number(desc);
          if (!Number.isInteger(desc)) return;
          if (desc > 1 || desc < 0) return;
          return true;
        } catch (error) {}
      },
      message: '请输入0-1范围的权限码',
    },
  },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
