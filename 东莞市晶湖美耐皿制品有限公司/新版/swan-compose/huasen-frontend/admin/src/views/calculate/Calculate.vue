<template>
  <div class="calculate">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item, index) in options" :key="item.key" :name="item.key">
        <template slot="title">
          <i class="el-icon-collection-tag mr-px-4"></i>
          {{ item.name }}
          <!-- 变量配置面板不显示新增图标按钮 -->
          <i v-if="item.key !== 'variable' && item.key !== 'function'" class="el-icon-circle-plus text-green-400 text-18px ml-px-8" @click.stop="handleAdd(item)"></i>
        </template>
        <!-- 选项配置表格 -->
        <el-table class="calculate__table--select" v-if="item.data.type === 'select'" :data="handleSelectOptions(item.data.value)" style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column prop="label" label="标签名">
            <template slot-scope="scope">
              <font v-if="!scope.row.edit">{{ scope.row.label }}</font>
              <el-input v-else v-model="scope.row.label"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="值">
            <template slot-scope="scope">
              <font v-if="!scope.row.edit">{{ scope.row.value }}</font>
              <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.value"></el-input>
            </template>
          </el-table-column>
          <!-- 特殊处理物流城市 -->
          <template v-if="item.key === 'destinationCityOptions'">
            <el-table-column prop="less300" label="<300">
              <template slot-scope="scope">
                <font v-if="!scope.row.edit">{{ scope.row.less300 }}</font>
                <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.less300"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="less500" label="<500">
              <template slot-scope="scope">
                <font v-if="!scope.row.edit">{{ scope.row.less500 }}</font>
                <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.less500"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="less1000" label="<1000">
              <template slot-scope="scope">
                <font v-if="!scope.row.edit">{{ scope.row.less1000 }}</font>
                <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.less1000"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="more1000" label=">=1000">
              <template slot-scope="scope">
                <font v-if="!scope.row.edit">{{ scope.row.more1000 }}</font>
                <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.more1000"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="运输时间">
              <template slot-scope="scope">
                <font v-if="!scope.row.edit">{{ scope.row.time }}</font>
                <el-input v-else title="请输入文字" v-model="scope.row.time"></el-input>
              </template>
            </el-table-column>
          </template>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="success" size="small" @click="handleSave(item, index, scope)">完成</el-button>
              <el-button v-else type="primary" size="small" @click="handleEidt(item, index, scope)">编辑</el-button>
              <el-popconfirm @confirm="handleRemove(item, index, scope)" class="ml-px-10" popper-class="delete-popcomfirm" title="确定删除吗？">
                <el-button slot="reference" type="danger" size="small">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- 变量配置表格 -->
        <el-table class="calculate__table--input" v-if="item.key === 'variable'" :data="handleSelectOptions(item.data.value)" style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column label="变量">
            <template slot-scope="scope">
              <font>{{ scope.row.key }}</font>
            </template>
          </el-table-column>
          <el-table-column prop="label" label="名称">
            <template slot-scope="scope">
              <font>{{ scope.row.label }}</font>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="值">
            <template slot-scope="scope">
              <font v-if="!scope.row.edit">{{ scope.row.value }}</font>
              <el-input v-else title="请输入数字" type="number" :min="0" v-model.number="scope.row.value"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="success" size="small" @click="handleSave(item, index, scope)">完成</el-button>
              <el-button v-else type="primary" size="small" @click="handleEidt(item, index, scope)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 函数配置表格 -->
        <el-table ref="CodeTable" class="calculate__table--code" v-if="item.key === 'function'" :data="handleSelectOptions(item.data.value)" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <div class="w-full h-auto">
                <CodeEdit :code.sync="props.row.value" :editable="props.row.edit"></CodeEdit>
              </div>
            </template>
          </el-table-column>
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column label="方法名">
            <template slot-scope="scope">
              <font>{{ scope.row.key }}</font>
            </template>
          </el-table-column>
          <el-table-column prop="label" label="描述">
            <template slot-scope="scope">
              <font>{{ scope.row.label }}</font>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="success" size="small" @click="handleSave(item, index, scope, 'expand')">完成</el-button>
              <el-button v-else type="primary" size="small" @click="handleEidt(item, index, scope, 'expand')">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import CodeEdit from './CodeEdit.vue';
export default {
  name: 'Calculate',

  components: { CodeEdit },

  data() {
    return {
      activeNames: [],
      currentUpdateOptionId: null,
      options: [],
    };
  },

  mounted() {
    this.queryOptions();
  },

  methods: {
    // 处理选项数据，添加edit编辑标识
    handleSelectOptions(list) {
      list.forEach(element => {
        element.edit = Object.prototype.hasOwnProperty.call(element, 'edit') ? element.edit : false;
      });
      return list;
    },

    /**
     * 展开函数表中编辑状态的行
     * @param {array} option
     */
    openExpand(option) {
      // 因为ref使用在v-for中，所以取到数组
      const table = this.$refs.CodeTable[0];
      if (table) {
        this.$nextTick(() => {
          option.data.value.forEach(el => {
            if (el.edit) {
              table && table.toggleRowExpansion(el, true);
            }
          });
        });
      }
    },

    // 处理点击完成操作
    async handleSave(option, index, scope, flag) {
      // 拷贝数据，调用接口，尝试完成编辑，如果调用不成功，不会影响页面
      let optionCP = this.LODASH.cloneDeep(option);
      const target = optionCP.data.value[scope.$index];
      target.edit = false;
      let newOption = await this.updateOption(optionCP);
      // 修改配置数组，页面会自动刷新
      this.options.splice(index, 1, newOption);
      if (flag === 'expand') {
        this.openExpand(newOption);
      }
    },

    // 处理编辑操作
    handleEidt(option, index, scope, flag) {
      let target = option.data.value[scope.$index];
      target.edit = true;
      this.$set(option.data.value, scope.$index, target);
      if (flag === 'expand') {
        this.openExpand(option);
      }
    },

    // 处理删除操作
    async handleRemove(option, index, scope) {
      let optionCP = this.LODASH.cloneDeep(option);
      optionCP.data.value.splice(scope.$index, 1);
      let newOption = await this.updateOption(optionCP);
      this.options.splice(index, 1, newOption);
    },

    // 处理新增操作
    handleAdd(option) {
      if (option.key === 'destinationCityOptions') {
        option.data.value.push({
          label: `#${option.data.value.length + 1}`,
          value: 0,
          less300: 0,
          less500: 0,
          less1000: 0,
          more1000: 0,
          edit: true,
        });
      } else {
        option.data.value.push({
          label: `#${option.data.value.length + 1}`,
          value: 0,
          edit: true,
        });
      }
    },

    // 查询选项数据
    async queryOptions() {
      let res = await this.API.Calculate.getOptions();
      this.options = res.data;
    },

    // 更新选项数据
    async updateOption(option) {
      let res = await this.API.Calculate.update(option);
      return this.LODASH.get(res, 'data[0]');
    },
  },
};
</script>

<style lang="scss" scoped>
.calculate {
  width: 100%;
  padding: 10px;
}
</style>

<style>
.calculate__table--code {
  .el-table__expanded-cell[class*='cell'] {
    padding: 0;
  }
}
</style>
