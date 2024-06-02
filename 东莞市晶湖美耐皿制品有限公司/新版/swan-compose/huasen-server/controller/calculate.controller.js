const CalculateOption = require('../mongodb/model/calculate-option.js');

async function getOptions(req, res, next) {
  try {
    let result = await CalculateOption.find();
    let list = result.map(item => {
      let { _id, _v, name, key, data } = item;
      return {
        _id,
        _v,
        name,
        key,
        data: JSON.parse(data),
      };
    });
    result = global.huasen.responseData(res, list, 'SUCCESS', '请求成功', false);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '请求失败', false);
  }
}

async function update(req, res, next) {
  try {
    let { _id } = req.huasenParams;
    req.huasenParams.data = JSON.stringify(req.huasenParams.data);
    await CalculateOption.updateOne({ _id }, { $set: req.huasenParams }, { runValidators: true });
    let list = await CalculateOption.find({ _id });
    let clist = list.map(item => {
      let { _id, _v, name, key, data } = item;
      return {
        _id,
        _v,
        name,
        key,
        data: JSON.parse(data),
      };
    });
    global.huasen.responseData(res, clist, 'SUCCESS', '更新成功', false);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '更新失败', false);
  }
}

async function add(req, res, next) {
  try {
    const { name, key, data } = req.huasenParams;
    let list = await CalculateOption.insertMany([
      {
        name,
        key,
        data,
      },
    ]);
    global.huasen.responseData(res, list, 'SUCCESS', '添加成功', false);
  } catch (err) {
    global.huasen.responseData(res, {}, 'ERROR', '添加失败', false);
  }
}

module.exports = {
  getOptions,
  update,
  add,
};
