const mongoose = require('mongoose');
let CalculateOptionSchema = new mongoose.Schema({
  // 名称
  name: {
    type: String,
    required: [true, '必需项'],
  },

  // 键
  key: {
    type: String,
    required: [true, '必需项'],
    unique: [true, '唯一'],
  },

  // 数据
  data: {
    type: String,
  },
});

const CalculateOption = mongoose.model('CalculateOption', CalculateOptionSchema);
module.exports = CalculateOption;
