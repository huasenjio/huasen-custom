<template>
  <div class="calculator shadow-md rounded">
    <el-form class="w-px-350" ref="form" :model="form" label-width="140px">
      <el-form-item label="产品颜色：">
        <ValueSelect :value.sync="form.colorPrice" :options="optionMap.colorOptions"></ValueSelect>
      </el-form-item>
      <el-form-item label="工艺名称：">
        <ValueSelect :value.sync="form.craftPrice" :options="optionMap.craftOptions" :order="this.form.craftOrder" @onOrder="v => (this.form.craftOrder = v)"></ValueSelect>
      </el-form-item>
      <el-form-item label="订单数量：">
        <ValueSelect :value.sync="form.orderCount" :options="optionMap.orderCountOptions"></ValueSelect>
      </el-form-item>
      <el-form-item label="产品重量：">
        <el-input type="number" :min="0" v-model.number="form.productWeight">
          <template slot="append">
            <div class="w-px-22 text-center">kg</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="产品模穴：">
        <el-input type="number" :min="0" v-model.number="form.modelHoleCount">
          <template slot="append">
            <div class="w-px-22 text-center">个</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="成型人数：">
        <ValueSelect :value.sync="form.formingCountPrice" :options="optionMap.formingCountOptions"></ValueSelect>
      </el-form-item>
      <el-form-item label="排版个数：">
        <el-input type="number" :min="0" v-model.number="form.arrangeCount"> </el-input>
      </el-form-item>
      <el-form-item label="纸箱单价：">
        <el-input type="number" :min="0" v-model.number="form.cartonPrice">
          <template slot="append">
            <div class="w-px-22 text-center">元</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="装箱个数：">
        <el-input type="number" :min="0" v-model.number="form.packingCount"> </el-input>
      </el-form-item>
      <el-form-item label="研磨尺寸：">
        <ValueSelect :value.sync="form.grindSize" :options="optionMap.grindSizeOptions"></ValueSelect>
      </el-form-item>
      <el-form-item label="其它包材费用：">
        <el-input type="number" :min="0" v-model.number="form.pick">
          <template slot="append">
            <div class="w-px-22 text-center">元</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="出厂单价：">
        <el-input :value="factoryUnitPrice.toFixed(2) + '元'" :disabled="true">
          <template slot="append">
            <i class="el-icon-document-copy pointer" @click="copy(factoryUnitPrice.toFixed(2) + '元')"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="内箱长度：">
        <el-input type="number" :min="0" v-model.number="form.nL">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="内箱宽度：">
        <el-input type="number" :min="0" v-model.number="form.nW">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="内箱高度：">
        <el-input type="number" :min="0" v-model.number="form.nH">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="内箱装数：">
        <el-input type="number" :min="0" v-model.number="form.nCount">
          <template slot="append">
            <div class="w-px-22 text-center">个</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="外箱长度：">
        <el-input type="number" :min="0" v-model.number="form.wL">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="外箱宽度：">
        <el-input type="number" :min="0" v-model.number="form.wW">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="外箱高度：">
        <el-input type="number" :min="0" v-model.number="form.wH">
          <template slot="append">
            <div class="w-px-22 text-center">cm</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="外箱装数：">
        <el-input type="number" :min="0" v-model.number="form.wCount">
          <template slot="append">
            <div class="w-px-22 text-center">个</div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="内箱材质：">
        <ValueSelect :value.sync="form.nMateria" :options="optionMap.nMaterialOptions" :order="3"></ValueSelect>
      </el-form-item>
      <el-form-item label="外箱材质：">
        <ValueSelect :value.sync="form.wMateria" :options="optionMap.wMaterialOptions" :order="9"></ValueSelect>
      </el-form-item>
      <el-form-item label="隔板个数：">
        <el-input type="number" :min="0" v-model.number="form.baffleCount"></el-input>
      </el-form-item>
      <el-form-item label="纸箱单价：">
        <el-input :min="0" v-model.number="cartonUnitPrice" :disabled="true">
          <template slot="append">
            <i class="el-icon-document-copy pointer" @click="copy(cartonUnitPrice)"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="总货方数：">
        <el-input :value="cubeCount.toFixed(2)" :disabled="true">
          <template slot="append"> <i class="el-icon-document-copy pointer" @click="copy(cubeCount.toFixed(2))"></i> </template>
        </el-input>
      </el-form-item>
      <el-form-item label="FOB单价：">
        <el-input :value="'$' + FOBPrice.toFixed(2) + '美金/个'" :disabled="true">
          <template slot="append"> <i class="el-icon-document-copy pointer" @click="copy(FOBPrice.toFixed(2))"></i> </template>
        </el-input>
      </el-form-item>
      <el-form-item label="物流城市：">
        <ValueSelect :value.sync="form.destinationCity" :options="optionMap.destinationCityOptions" :order="form.destinationCityOrder" @onOrder="v => (this.form.destinationCityOrder = v)"></ValueSelect>
      </el-form-item>
      <el-form-item label="中通运费：">
        <el-input :value="ZTPrice" :disabled="true">
          <template slot="append"> <i class="el-icon-document-copy pointer" @click="copy(ZTPrice)"></i> </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ValueSelect from './Value-Select.vue';

export default {
  name: 'Calculator',

  components: { ValueSelect },

  props: {
    variable: {
      type: Object,
      default: () => {},
    },
    optionMap: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // 表单选中数据
      form: {
        colorPrice: 0, // 颜色单价
        orderCount: 0, // 订单数量
        productWeight: 0, // 产品重量

        craftOrder: 1, // 当前选中工艺的序号
        craftPrice: 1.13, // 当前选中工艺的单价

        modelHoleCount: 0, // 产品模穴
        formingCountPrice: 0, // 成型人数
        arrangeCount: 100, // 编排个数
        cartonPrice: 0, // 纸箱价格
        packingCount: 0, // 装箱个数
        grindSize: 0, // 当前选中的研磨尺寸
        pick: 0, // 其他包材

        nL: 0, // 内箱长度
        nW: 0, // 内箱宽度
        nH: 0, // 内箱高度
        nCount: 0, // 内箱装数
        nMateria: 0, // 内箱材质
        wL: 0, // 外箱长度
        wW: 0, // 外箱宽度
        wH: 0, // 外箱高度
        wCount: 0, // 外箱装数
        wMateria: 0, // 外箱材质
        baffleCount: 0, // 隔板个数
        destinationCityOrder: 1, // 当前选中物流城市的序号
        destinationCity: 1, // 物流城市的编码
      },
    };
  },

  computed: {
    // 出厂单价
    factoryUnitPrice() {
      const i = this.colorFlag;
      const j = this.form.craftPrice;
      const k = this.productWeightFlag;
      const moxue = this.form.modelHoleCount;
      const l = this.form.formingCountPrice;
      const m = this.craftAndWeightFlag;
      const n = parseFloat(0.1);
      const p = this.form.arrangeCount;
      const orderQty = this.form.orderCount;
      const q = this.form.cartonPrice;
      const r = this.form.packingCount;
      const s = this.form.grindSize;
      const t = this.form.pick;
      const control = this.craftFlag;
      let value = (i * j * k) / 1000 + (15.625 * k * n) / 1000 + l / (m * moxue * 20) + s + t * 1.25 + q / r + ((637.5 / ((orderQty / p) * (j + 0.05)) + 750 / ((orderQty / p) * (j + 0.05)) + 0.625 + 0.125 * p + 0.4375) / p) * (j + 0.05) * control;
      return value;
    },

    // FOB单价
    FOBPrice() {
      let exchangeRate = parseFloat(this.variable.exchangeRate);
      const value = ((this.cubeCount * 70 + 500 + 350 + 100 + 200 + 300 + 300 + 500) / this.form.orderCount + this.factoryUnitPrice) / exchangeRate;
      return value;
    },

    // 中通运费
    ZTPrice() {
      let el = this.form.wL;
      let ew = this.form.wW;
      let eh = this.form.wH;
      let eq = this.form.wCount;
      let temp7 = this.getPrice1(el, ew, eh, eq, this.form.orderCount);
      let temp8 = parseFloat(temp7);
      let temp9 = this.getPrice2(el, ew, eh, eq, this.form.orderCount);
      let temp10 = parseFloat(temp9);
      let temp11 = this.getTransportDay();
      let prefix = temp8 > temp10 ? temp8 : temp10;
      let suffix = `元${temp11}`;
      return prefix.toFixed(0) + suffix;
    },

    // 纸箱单价
    cartonUnitPrice() {
      let il = this.form.nL;
      let iw = this.form.nW;
      let ih = this.form.nH;
      let iq = this.form.nCount;
      let el = this.form.wL;
      let ew = this.form.wW;
      let eh = this.form.wH;
      let eq = this.form.wCount;
      let ip = this.form.nMateria;
      let ep = this.form.wMateria;
      let bq = this.form.baffleCount;
      let bp = 1.54;
      const value = (((il + iw + 5) * (iw + ih + 3) * 2 * 1.55 * ip) / 10000) * (eq / iq) * 1.25 + (((el + ew + 5) * (ew + eh + 3) * 2 * 1.55 * ep) / 10000) * 1.25 + 1.25 + (((il + 3) * (iw + 3) * 1.55 * bp * 1.25) / 10000) * bq;
      return value.toFixed(2);
    },

    // 总货立方
    cubeCount() {
      let el = this.form.wL;
      let ew = this.form.wW;
      let eh = this.form.wH;
      let eq = this.form.wCount;
      let value = ((el * ew * eh) / 1000000) * (this.form.orderCount / eq + 1);
      return value;
    },

    craftFlag() {
      let order = this.form.craftOrder;
      if (order == 1 || order == 2 || order == 3) {
        return 0;
      } else {
        return 1;
      }
    },

    craftAndWeightFlag() {
      let craftOrder = this.form.craftOrder;
      let weight = this.form.productWeight;
      let value = 0;
      if (craftOrder == 1) {
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
      }
      return value;
    },

    colorFlag() {
      let value = this.form.colorPrice;
      if (this.form.orderCount * this.productWeightFlag > 380000 && this.form.colorPrice === 25.6) {
        value = 24.375;
      }
      return value;
    },

    productWeightFlag() {
      let value = this.form.productWeight;
      if (value < 50) {
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
      }
      return value;
    },
  },

  methods: {
    copy(str) {
      this.TOOL.copyTextToClip(str, undefined, () => {
        this.$tips('success', '已拷贝到剪贴板');
      });
    },

    handleCraftChange(value) {
      let index = this.craftOptions.findIndex(item => item.value === value);
      this.form.craftOrder = index + 1;
    },

    getPrice1(el, ew, eh, eq, temp3) {
      const productWeight = this.form.productWeight;
      const realtotalweight = ((productWeight * eq) / 1000 + 1.6) * (temp3 / eq + 1);
      const destinationCityOrder = this.form.destinationCityOrder; // 物流城市的序号
      const destinationCityIndex = destinationCityOrder - 1; //序号减1就是数组下标
      const destinationCityObj = this.optionMap.destinationCityOptions[destinationCityIndex]; // 物流城市对象
      let temp4 = 0;
      if (realtotalweight < 300) {
        temp4 = destinationCityObj.less300;
      } else if (realtotalweight < 500) {
        temp4 = destinationCityObj.less500;
      } else if (realtotalweight < 1000) {
        temp4 = destinationCityObj.less1000;
      } else if (realtotalweight >= 1000) {
        temp4 = destinationCityObj.more1000;
      }
      return temp4 * realtotalweight * 1.1;
    },

    getPrice2(el, ew, eh, eq, temp3) {
      let productWeight = (el * ew * eh) / 5000;
      let realtotalweight = productWeight * (temp3 / eq + 1);
      const destinationCityOrder = this.form.destinationCityOrder; // 物流城市的序号
      const destinationCityIndex = destinationCityOrder - 1; //序号减1就是数组下标
      const destinationCityObj = this.optionMap.destinationCityOptions[destinationCityIndex]; // 物流城市对象
      let temp4 = 0;
      if (realtotalweight < 300) {
        temp4 = destinationCityObj.less300;
      } else if (realtotalweight < 500) {
        temp4 = destinationCityObj.less500;
      } else if (realtotalweight < 1000) {
        temp4 = destinationCityObj.less1000;
      } else if (realtotalweight >= 1000) {
        temp4 = destinationCityObj.more1000;
      }
      return temp4 * realtotalweight * 1.1;
    },

    getTransportDay() {
      const destinationCity = this.form.destinationCity;
      let temp4 = '0天';
      if (destinationCity == 1) {
        temp4 = ' 1天';
      } else if (destinationCity == 2) {
        temp4 = ' 1-2天';
      } else if (destinationCity == 3 || destinationCity == 4 || destinationCity == 5 || destinationCity == 6) {
        temp4 = ' 2-3天';
      } else if (destinationCity == 7 || destinationCity == 8 || destinationCity == 9 || destinationCity == 10 || destinationCity == 11) {
        temp4 = ' 2-3天';
      } else if (destinationCity == 12) {
        temp4 = ' 2-3天';
      } else if (destinationCity == 13) {
        temp4 = ' 3-4天';
      } else if (destinationCity == 14 || destinationCity == 15 || destinationCity == 16 || destinationCity == 17 || destinationCity == 18) {
        temp4 = ' 3-4天';
      } else if (destinationCity == 19 || destinationCity == 20) {
        temp4 = ' 3-4天';
      } else if (destinationCity == 21 || destinationCity == 22) {
        temp4 = ' 3-4天';
      } else if (destinationCity == 23 || destinationCity == 24 || destinationCity == 25) {
        temp4 = ' 4-6天';
      } else if (destinationCity == 26) {
        temp4 = ' 4-5天';
      } else if (destinationCity == 27) {
        temp4 = ' 4-5天';
      } else if (destinationCity == 28) {
        temp4 = ' 5-7天';
      } else if (destinationCity == 29) {
        temp4 = ' 5-7天';
      } else if (destinationCity == 30) {
        temp4 = ' 5-7天';
      } else if (destinationCity == 31) {
        temp4 = ' 5-7天';
      }
      return temp4;
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  padding: 10px;
  background-color: var(--gray-0);
  ::v-deep .el-select {
    width: 100%;
  }
}
</style>
