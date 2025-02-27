const CalculateOption = require('../model/calculate-option.js');
(() => {
  setTimeout(async () => {
    try {
      let calculateOptions = await CalculateOption.find();
      if (!calculateOptions.length) {
        await CalculateOption.insertMany([
          {
            name: '函数配置',
            key: 'function',
            data: JSON.stringify({
              type: 'code',
              value: [
                {
                  key: 'chanPinZhongLiangFun',
                  label: '增加毛边重量函数',
                  value: `if (value < 50) {
                    value += 5;
                  } else if (value < 100) {
                    value += 10;
                  } else if (value < 300) {
                    value += 15;
                  } else if (value < 500) {
                    value += 25;
                  } else if (value < 600) {
                    value += 30;
                  } else if (value < 1000) {
                    value += 50;
                  } else if (value < 1500) {
                    value += 70;
                  } else {
                    value += 100;
                  }`,
                },
                {
                  key: 'quJianZhiRiChanLiangFun',
                  label: '区间值日产量函数',
                  value: `if (craftOrder == 1) {
                    if (weight <= 400) {
                      value = 30;
                    } else if (weight <= 600) {
                      value = 25;
                    } else if (weight <= 1000) {
                      value = 18;
                    } else if (weight <= 1500) {
                      value = 15;
                    } else if (weight <= 2000) {
                      value = 10;
                    } else {
                      value = 6;
                    }
                  } else if (craftOrder == 2) {
                    if (weight <= 400) {
                      value = 20;
                    } else if (weight <= 600) {
                      value = 17;
                    } else if (weight <= 1000) {
                      value = 13;
                    } else if (weight <= 1500) {
                      value = 10;
                    } else if (weight <= 2000) {
                      value = 8;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 3) {
                    if (weight <= 400) {
                      value = 15;
                    } else if (weight <= 600) {
                      value = 13;
                    } else if (weight <= 1000) {
                      value = 11;
                    } else if (weight <= 1500) {
                      value = 9;
                    } else if (weight <= 2000) {
                      value = 7;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 4) {
                    if (weight <= 400) {
                      value = 20;
                    } else if (weight <= 600) {
                      value = 17;
                    } else if (weight <= 1000) {
                      value = 13;
                    } else if (weight <= 1500) {
                      value = 10;
                    } else if (weight <= 2000) {
                      value = 8;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 5) {
                    if (weight <= 400) {
                      value = 10;
                    } else if (weight <= 600) {
                      value = 9;
                    } else if (weight <= 1000) {
                      value = 8;
                    } else if (weight <= 1500) {
                      value = 8;
                    } else if (weight <= 2000) {
                      value = 6;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 6) {
                    if (weight <= 400) {
                      value = 20;
                    } else if (weight <= 600) {
                      value = 17;
                    } else if (weight <= 1000) {
                      value = 13;
                    } else if (weight <= 1500) {
                      value = 10;
                    } else if (weight <= 2000) {
                      value = 8;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 7) {
                    if (weight <= 400) {
                      value = 10;
                    } else if (weight <= 600) {
                      value = 9;
                    } else if (weight <= 1000) {
                      value = 8;
                    } else if (weight <= 1500) {
                      value = 8;
                    } else if (weight <= 2000) {
                      value = 6;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 8) {
                    if (weight <= 400) {
                      value = 20;
                    } else if (weight <= 600) {
                      value = 17;
                    } else if (weight <= 1000) {
                      value = 13;
                    } else if (weight <= 1500) {
                      value = 10;
                    } else if (weight <= 2000) {
                      value = 8;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 9) {
                    if (weight <= 400) {
                      value = 10;
                    } else if (weight <= 600) {
                      value = 9;
                    } else if (weight <= 1000) {
                      value = 8;
                    } else if (weight <= 1500) {
                      value = 8;
                    } else if (weight <= 2000) {
                      value = 6;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 10) {
                    if (weight <= 400) {
                      value = 15;
                    } else if (weight <= 600) {
                      value = 14;
                    } else if (weight <= 1000) {
                      value = 11;
                    } else if (weight <= 1500) {
                      value = 10;
                    } else if (weight <= 2000) {
                      value = 8;
                    } else {
                      value = 5;
                    }
                  } else if (craftOrder == 11) {
                    if (weight <= 400) {
                      value = 9;
                    } else if (weight <= 600) {
                      value = 8;
                    } else if (weight <= 1000) {
                      value = 7;
                    } else if (weight <= 1500) {
                      value = 7;
                    } else if (weight <= 2000) {
                      value = 5;
                    } else {
                      value = 3;
                    }
                  } else if (craftOrder == 12) {
                    if (weight <= 400) {
                      value = 12;
                    } else if (weight <= 600) {
                      value = 10;
                    } else if (weight <= 1000) {
                      value = 9;
                    } else if (weight <= 1500) {
                      value = 7;
                    } else if (weight <= 2000) {
                      value = 6;
                    } else {
                      value = 3;
                    }
                  } else if (craftOrder == 13) {
                    if (weight <= 400) {
                      value = 7;
                    } else if (weight <= 600) {
                      value = 7;
                    } else if (weight <= 1000) {
                      value = 6;
                    } else if (weight <= 1500) {
                      value = 5;
                    } else if (weight <= 2000) {
                      value = 5;
                    } else {
                      value = 3;
                    }
                  }`,
                },
              ],
            }),
          },
          {
            name: '变量配置',
            key: 'variable',
            data: JSON.stringify({
              type: 'input',
              value: [
                {
                  key: 'huiLv',
                  label: '汇率',
                  value: 6.8,
                },
                {
                  key: 'liangGuangFenPrice',
                  label: '亮光粉价格',
                  value: 15.625,
                },
                {
                  key: 'gongShi',
                  label: '工时',
                  value: 20,
                },
                {
                  key: 'fuZhuSunHao',
                  label: '辅助损耗',
                  value: 1.25,
                },
                {
                  key: 'huaZhi1',
                  label: '花纸1号',
                  value: 637.5,
                },
                {
                  key: 'huaZhi2',
                  label: '花纸2号',
                  value: 750,
                },
                {
                  key: 'yuanLiaoQiDingLiang',
                  label: '原料起订量（g）',
                  value: 380000,
                },
                {
                  key: 'yuanLiaoQiDingLiangDanJia',
                  label: '有色原料起订量单价（元）',
                  value: 24.375,
                },
              ],
            }),
          },
          {
            name: '产品颜色选项',
            key: 'colorOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '白色产品',
                  value: 23.1,
                },
                {
                  label: '黑色产品',
                  value: 23.1,
                },
                {
                  label: '有色产品',
                  value: 25.6,
                  key: 'youSe',
                },
                {
                  label: '大理石产品',
                  value: 28,
                },
              ],
            }),
          },
          {
            name: '工艺名称选项',
            key: 'craftOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '单色素面',
                  value: 1.13,
                },
                {
                  label: '双色素面',
                  value: 1.15,
                },
                {
                  label: '三色素面',
                  value: 1.2,
                },
                {
                  label: '白色单面贴花',
                  value: 1.15,
                },
                {
                  label: '白色双面贴花',
                  value: 1.2,
                },
                {
                  label: '黑色单面贴花',
                  value: 1.15,
                },
                {
                  label: '黑色双面贴花',
                  value: 1.2,
                },
                {
                  label: '有色单面贴花',
                  value: 1.15,
                },
                {
                  label: '有色双面贴花',
                  value: 1.2,
                },
                {
                  label: '双色单面贴花',
                  value: 1.2,
                },
                {
                  label: '双色双面贴花',
                  value: 1.3,
                },
                {
                  label: '三色单面贴花',
                  value: 1.35,
                },
                {
                  label: '三色双面贴花',
                  value: 1.55,
                },
              ],
            }),
          },
          {
            name: '订单数量选项',
            key: 'orderCountOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '1000个',
                  value: 1000,
                },
                {
                  label: '2000个',
                  value: 2000,
                },
                {
                  label: '3000个',
                  value: 3000,
                },
                {
                  label: '4000个',
                  value: 4000,
                },
                {
                  label: '5000个',
                  value: 5000,
                },
                {
                  label: '6000个',
                  value: 6000,
                },
                {
                  label: '7000个',
                  value: 7000,
                },
                {
                  label: '8000个',
                  value: 8000,
                },
                {
                  label: '9000个',
                  value: 9000,
                },
                {
                  label: '10000个',
                  value: 10000,
                },
                {
                  label: '11000个',
                  value: 11000,
                },
                {
                  label: '15000个',
                  value: 15000,
                },
                {
                  label: '20000个',
                  value: 20000,
                },
              ],
            }),
          },
          {
            name: '成型人数选项',
            key: 'formingCountOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '1个人做',
                  value: 7062.5,
                },
                {
                  label: '2个人做',
                  value: 7437.5,
                },
              ],
            }),
          },
          {
            name: '研磨尺寸选项',
            key: 'grindSizeOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '10cm常规形状',
                  value: 0.125,
                },
                {
                  label: '20cm常规形状',
                  value: 0.375,
                },
                {
                  label: '30cm常规形状',
                  value: 0.625,
                },
                {
                  label: '40cm常规形状',
                  value: 0.75,
                },
                {
                  label: '50cm常规形状',
                  value: 0.875,
                },
                {
                  label: '60cm常规形状',
                  value: 1,
                },
                {
                  label: '单耳杯',
                  value: 0.75,
                },
                {
                  label: '双耳杯',
                  value: 0.875,
                },
                {
                  label: '30cm特殊研磨',
                  value: 1.6875,
                },
              ],
            }),
          },
          {
            name: '内箱材质选项',
            key: 'nMaterialOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: 'B4B',
                  value: 1.54,
                },
                {
                  label: 'B=B',
                  value: 2.09,
                },
                {
                  label: 'B=B+',
                  value: 2.18,
                },
                {
                  label: 'A=B',
                  value: 2.26,
                },
                {
                  label: 'A=B+',
                  value: 2.34,
                },
                {
                  label: 'A=A',
                  value: 2.35,
                },
                {
                  label: 'A=A+',
                  value: 2.43,
                },
                {
                  label: 'K=A',
                  value: 2.47,
                },
                {
                  label: 'K=A+',
                  value: 2.52,
                },
                {
                  label: 'K=K',
                  value: 2.63,
                },
                {
                  label: 'K=K+',
                  value: 2.7,
                },
              ],
            }),
          },
          {
            name: '外箱材质选项',
            key: 'wMaterialOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: 'B4B',
                  value: 1.54,
                },
                {
                  label: 'B=B',
                  value: 2.09,
                },
                {
                  label: 'B=B+',
                  value: 2.18,
                },
                {
                  label: 'A=B',
                  value: 2.26,
                },
                {
                  label: 'A=B+',
                  value: 2.34,
                },
                {
                  label: 'A=A',
                  value: 2.35,
                },
                {
                  label: 'A=A+',
                  value: 2.43,
                },
                {
                  label: 'K=A',
                  value: 2.47,
                },
                {
                  label: 'K=A+',
                  value: 2.52,
                },
                {
                  label: 'K=K',
                  value: 2.63,
                },
                {
                  label: 'K=K+',
                  value: 2.7,
                },
              ],
            }),
          },
          {
            name: '物流城市选项',
            key: 'destinationCityOptions',
            data: JSON.stringify({
              type: 'select',
              value: [
                {
                  label: '广州珠三角',
                  value: 1,
                  less300: 0.7,
                  less500: 0.6,
                  less1000: 0.6,
                  more1000: 0.5,
                  time: '1天',
                },
                {
                  label: '广州偏远区',
                  value: 2,
                  less300: 0.8,
                  less500: 0.7,
                  less1000: 0.6,
                  more1000: 0.6,
                  time: '1-2天',
                },
                {
                  label: '浙江',
                  value: 3,
                  less300: 1.4,
                  less500: 1.2,
                  less1000: 1,
                  more1000: 0.9,
                  time: '2-3天',
                },
                {
                  label: '江苏',
                  value: 4,
                  less300: 1.4,
                  less500: 1.2,
                  less1000: 1,
                  more1000: 0.9,
                  time: '2-3天',
                },
                {
                  label: '上海',
                  value: 5,
                  less300: 1.4,
                  less500: 1.2,
                  less1000: 1,
                  more1000: 0.9,
                  time: '2-3天',
                },
                {
                  label: '安徽',
                  value: 6,
                  less300: 1.4,
                  less500: 1.2,
                  less1000: 1,
                  more1000: 0.9,
                  time: '2-3天',
                },
                {
                  label: '江西',
                  value: 7,
                  less300: 1.2,
                  less500: 1,
                  less1000: 0.9,
                  more1000: 0.7,
                  time: '2-3天',
                },
                {
                  label: '广西',
                  value: 8,
                  less300: 1.2,
                  less500: 1,
                  less1000: 0.9,
                  more1000: 0.7,
                  time: '2-3天',
                },
                {
                  label: '湖北',
                  value: 9,
                  less300: 1.2,
                  less500: 1,
                  less1000: 0.9,
                  more1000: 0.7,
                  time: '2-3天',
                },
                {
                  label: '湖南',
                  value: 10,
                  less300: 1.2,
                  less500: 1,
                  less1000: 0.9,
                  more1000: 0.7,
                  time: '2-3天',
                },
                {
                  label: '福建',
                  value: 11,
                  less300: 1.2,
                  less500: 1,
                  less1000: 0.9,
                  more1000: 0.7,
                  time: '2-3天',
                },
                {
                  label: '海南',
                  value: 12,
                  less300: 1.8,
                  less500: 1.6,
                  less1000: 1.3,
                  more1000: 1.1,
                  time: '2-3天',
                },
                {
                  label: '河南',
                  value: 13,
                  less300: 1.4,
                  less500: 1.2,
                  less1000: 1.1,
                  more1000: 0.9,
                  time: '3-4天',
                },
                {
                  label: '北京',
                  value: 14,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '天津',
                  value: 15,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '山东',
                  value: 16,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '河北',
                  value: 17,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '山西',
                  value: 18,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '四川',
                  value: 19,
                  less300: 1.8,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '重庆',
                  value: 20,
                  less300: 1.8,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '云南',
                  value: 21,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '贵州',
                  value: 22,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1,
                  time: '3-4天',
                },
                {
                  label: '黑龙江',
                  value: 23,
                  less300: 2.1,
                  less500: 1.8,
                  less1000: 1.6,
                  more1000: 1.3,
                  time: '4-6天',
                },
                {
                  label: '吉林',
                  value: 24,
                  less300: 2.1,
                  less500: 1.8,
                  less1000: 1.6,
                  more1000: 1.3,
                  time: '4-6天',
                },
                {
                  label: '辽宁',
                  value: 25,
                  less300: 2.1,
                  less500: 1.8,
                  less1000: 1.6,
                  more1000: 1.3,
                  time: '4-6天',
                },
                {
                  label: '陕西',
                  value: 26,
                  less300: 1.7,
                  less500: 1.4,
                  less1000: 1.2,
                  more1000: 1.3,
                  time: '4-5天',
                },
                {
                  label: '宁夏',
                  value: 27,
                  less300: 2.1,
                  less500: 1.9,
                  less1000: 1.6,
                  more1000: 1.4,
                  time: '4-5天',
                },
                {
                  label: '新疆乌市地区',
                  value: 28,
                  less300: 4.5,
                  less500: 4,
                  less1000: 3.5,
                  more1000: 3,
                  time: '5-7天',
                },
                {
                  label: '新疆其他',
                  value: 29,
                  less300: 7,
                  less500: 6.5,
                  less1000: 6,
                  more1000: 5,
                  time: '5-7天',
                },
                {
                  label: '青海',
                  value: 30,
                  less300: 4,
                  less500: 4.5,
                  less1000: 4,
                  more1000: 3.5,
                  time: '5-7天',
                },
                {
                  label: '内蒙',
                  value: 31,
                  less300: 2.4,
                  less500: 2.1,
                  less1000: 1.8,
                  more1000: 1.6,
                  time: '5-7天',
                },
              ],
            }),
          },
        ]);
        console.log('初始化计算选项成功');
      } else {
        // 测试代码
        // let _ids = calculateOptions.map(item => item._id);
        // let res = await CalculateOption.deleteMany({ _id: { $in: _ids } });
        // console.log(res);
      }
    } catch (err) {
      console.log('创建计算选项失败', err);
    }
  }, 1000);
})();
