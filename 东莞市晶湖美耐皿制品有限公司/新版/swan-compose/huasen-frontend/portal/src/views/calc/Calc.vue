<template>
  <div class="calc">
    <template v-if="loaded">
      <Calculator :optionMap="optionMap" :functionMap="functionMap" :variable="variable" v-for="(item, index) in calculators" :key="item + index"></Calculator>
    </template>
  </div>
</template>

<script>
import Calculator from './calculator/Calculator.vue';

export default {
  name: 'Calc',

  components: { Calculator },

  data() {
    return {
      cpnWidth: 0,
      cpnHeight: 0,

      loaded: false, // 数据是否已加载
      // 变量
      variable: {},
      // 方法
      functionMap: {},
      // 选项
      optionMap: {
        colorOptions: [],
        orderCountOptions: [],
        craftOptions: [],
        grindSizeOptions: [],
        formingCountOptions: [],
        nMaterialOptions: [],
        wMaterialOptions: [],
        destinationCityOptions: [],
      },
    };
  },

  computed: {
    calculators() {
      let width = this.cpnWidth;
      if (width > 1500) {
        return ['x1', 'x2', 'x3', 'x4'];
      } else if (width > 1125) {
        return ['x1', 'x2', 'x3'];
      } else if (width > 750) {
        return ['x1', 'x2'];
      } else {
        return ['x1'];
      }
    },
  },

  mounted() {
    this._cpnObsever = new ResizeObserver(([entry]) => {
      let { width, height } = entry.contentRect;
      this.cpnWidth = width;
      this.cpnHeight = height;
    });
    this._cpnObsever.observe(this.$el);
    // 组件渲染完成时，请求接口数据
    this.queryOptions();
  },

  destroyed() {
    if (this._cpnObsever) {
      this._cpnObsever.unobserve(this.$el);
    }
  },

  methods: {
    queryOptions() {
      this.API.Calculator.getOptions()
        .then(res => {
          let opt = {};
          let val = {};
          let fun = {};
          res.data.forEach(el => {
            if (el.key === 'variable') {
              // 获得变量
              el.data.value.forEach(e => {
                val[e.key] = e.value;
              });
            } else if (el.key === 'function') {
              // 获得方法
              el.data.value.forEach(e => {
                fun[e.key] = e.value;
              });
            } else {
              // 获得下拉选项
              opt[el.key] = el.data.value;
            }
          });
          this.optionMap = opt;
          this.variable = val;
          this.functionMap = fun;
          this.loaded = true;
        })
        .catch(err => {
          if (err.response.status && this.STORAGE.getItem(this.CONSTANT.localUser)) {
            this.STORAGE.removeItemByKey(this.CONSTANT.localUser);
            location.reload();
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.calc {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--gray-50);
}
</style>
