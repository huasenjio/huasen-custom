<template>
  <div class="code-edit">
    <div v-if="!editable" class="shade"></div>
    <codemirror style="width: 100%; height: 100%;" v-model="codeValue" :options="codeOptions"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/mode/javascript/javascript.js';
export default {
  name: 'CodeEdit',
  components: { codemirror },
  props: {
    code: {
      type: String,
      default: 'let count = 0',
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    codeValue: {
      get() {
        return this.code;
      },
      set(val) {
        this.$emit('update:code', val);
      },
    },
    codeOptions() {
      return {
        line: true,
        theme: 'rubyblue',
        tabSize: 4, // 制表符的宽度
        readOnly: !this.editable, // 只读
        autorefresh: true,
        smartIndent: true, // 上下文缩进
        lineNumbers: true, // 是否显示行号
        mode: 'javascript',
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.code-edit {
  position: relative;
  width: 100%;
  height: 100%;
  .shade {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    cursor: not-allowed;
    background-color: #fff;
    opacity: 0.4;
  }
}
</style>
