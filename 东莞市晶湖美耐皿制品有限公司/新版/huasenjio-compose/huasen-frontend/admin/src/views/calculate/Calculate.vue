<template>
  <div class="calculate">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item, index) in options" :key="item.key" :name="item.key">
        <template slot="title">
          <i class="el-icon-collection-tag mr-px-4"></i>
          {{ item.name }}
          <!-- 变量配置面板不显示新增图标按钮 -->
          <i v-if="item.key !== 'variable'" class="el-icon-circle-plus text-green-400 text-18px ml-px-8" @click.stop="handleAdd(item)"></i>
        </template>

        <!-- 选项配置表格 -->
        <el-table v-if="item.data.type === 'select'" :data="handleSelectOptions(item.data.value)" style="width: 100%">
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
          </template>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="success" size="small" @click="handleSave(item, index, scope)">完成</el-button>
              <el-button v-else type="primary" size="small" @click="handleEidt(item, scope)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleRemove(item, index, scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 变量配置表格 -->
        <el-table v-if="item.data.type === 'input'" :data="handleSelectOptions(item.data.value)" style="width: 100%">
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
              <el-button v-else type="primary" size="small" @click="handleEidt(item, scope)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Calculate',

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

    // 处理点击完成操作
    async handleSave(option, index, scope) {
      // 拷贝数据，调用接口，尝试完成编辑，如果调用不成功，不会影响页面
      let optionCP = this.LODASH.cloneDeep(option);
      const target = optionCP.data.value[scope.$index];
      target.edit = false;
      let newOption = await this.updateOption(optionCP);
      // 修改配置数组，页面会自动刷新
      this.options.splice(index, 1, newOption);
    },

    // 处理编辑操作
    handleEidt(option, scope) {
      let target = option.data.value[scope.$index];
      target.edit = true;
      this.$set(option.data.value, scope.$index, target);
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
