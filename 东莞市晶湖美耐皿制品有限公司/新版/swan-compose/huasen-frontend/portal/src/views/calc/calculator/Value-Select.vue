<template>
  <el-select class="value-select" v-model="selectIndex" @change="handleChange">
    <el-option v-for="(item, index) in options" :label="item.label" :value="index" :key="index"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'ValueSelect',

  props: {
    value: {
      type: Number,
      default: 0,
    },

    options: {
      type: Array,
      default: () => [],
    },

    // 选中的顺序（1-*）
    order: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      // 选中下标（0-*）
      selectIndex: -1,
    };
  },

  watch: {
    order: {
      handler(nV) {
        let currentIndex = nV - 1;
        if (this.selectIndex !== currentIndex) {
          this.selectIndex = this.options[currentIndex] ? currentIndex : 0;
          this.handleChange();
        }
      },
      immediate: true,
    },
  },

  methods: {
    handleChange() {
      let seleced = this.options[this.selectIndex];
      if (Object.prototype.hasOwnProperty.call(seleced, 'value')) {
        this.$emit('update:value', parseFloat(seleced.value));
        this.$emit('onOrder', this.selectIndex + 1);
      } else {
        console.error('options数组内对象，不存在value属性，无法选中。');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
