<template>
  <div class="account-user">
    <TableList
      :tableData="users"
      :tableMap="tableMap"
      :formData.sync="searchForm"
      :formMap="searchFormMap"
      :showAdd="true"
      :total="total"
      @edit="editUser"
      @add="addUser"
      @remove="removeUser"
      @search="queryUser"
      @paginationChange="paginationChange"
      @updatePagination="updatePagination"
    ></TableList>
    <DialogForm
      v-if="show"
      ref="dialogForm"
      width="460"
      :title="mode == 'add' ? '添加用户' : '编辑用户'"
      :visible.sync="show"
      :mode="mode"
      :close-on-click-modal="false"
      :buttons="{ comfirm: '确 认', cancel: '取 消' }"
      :formMap="formMap"
      :formData.sync="form"
      :formRule="rule"
      @comfirmForm="save"
      @cancelForm="cancel"
    ></DialogForm>
  </div>
</template>

<script>
import TableList from '@/components/content/table-list/TableList.vue';
import DialogForm from '@/components/content/dialog-form/DialogForm.vue';

import { getElementFormValidator } from '@/plugin/strategy.js';
export default {
  name: 'AccountUser',
  components: { TableList, DialogForm },
  data() {
    return {
      users: [],
      tableMap: [
        {
          label: '账号',
          key: 'id',
        },
        {
          label: '密码',
          key: 'password',
        },
        {
          label: '权限码',
          key: 'code',
        },
        {
          label: '昵称',
          key: 'name',
        },
      ],
      total: 0,

      // 搜索表单
      searchForm: {
        id: '',
        name: '',
        code: '',
      },
      searchFormMap: [
        {
          label: '账号',
          type: 'input',
          key: 'id',
        },
        {
          label: '昵称',
          type: 'input',
          key: 'name',
        },
        {
          label: '权限码',
          key: 'code',
          type: 'select',
          selectOptions: this.CONSTANT.dictionary.code,
        },
      ],
      // 添加编辑表单
      show: false,
      mode: 'add',
      formMap: [
        {
          label: '账号',
          key: 'id',
          type: 'input',
          editDisabled: true,
        },
        {
          label: '密码',
          key: 'password',
          type: 'input',
        },
        {
          label: '类型',
          key: 'code',
          type: 'select',
          selectOptions: this.CONSTANT.dictionary.code,
        },
        {
          label: '昵称',
          key: 'name',
          type: 'input',
        },
      ],
      rule: {
        id: [{ validator: getElementFormValidator(['isNoEmpty::必填项', 'minLength:5::长度小于5', 'maxLength:20::长度大于20', 'isEmail::请输入邮箱']), trigger: 'blur' }],
        password: [{ validator: getElementFormValidator(['isNoEmpty::必填项', 'minLength:5::长度小于5']), trigger: 'blur' }],
        name: [{ validator: getElementFormValidator(['minLength:2::长度小于2', 'maxLength:20::长度大于20']), trigger: 'blur' }],
      },
      form: {
        id: '',
        password: '',
        code: 0,
        name: '',
      },
      pageNo: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.queryUser();
  },
  methods: {
    queryUser() {
      let params = Object.assign(
        {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        },
        this.searchForm,
      );
      this.API.User.findByPage(params, {
        notify: false,
      }).then(res => {
        this.users = res.data.list;
        this.total = res.data.total;
        this.cancel();
      });
    },
    updatePagination(pageNo, pageSize) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
    },
    removeUser(index, row, pageNo, pageSize) {
      this.API.User.remove({ _id: row._id }).then(res => {
        this.queryUser();
      });
    },
    addUser() {
      this.show = true;
      this.mode = 'add';
    },
    editUser(index, row) {
      this.show = true;
      this.mode = 'edit';
      this.$nextTick(() => {
        this.form = Object.assign(this.form, row);
      });
    },
    // 分页组件发生变化
    paginationChange(pageNo, pageSize) {
      this.queryUser();
    },
    save() {
      if (this.mode === 'edit') {
        // 编辑
        this.API.User.update(this.form).then(res => {
          this.queryUser();
        });
      } else if (this.mode === 'add') {
        // el-form 无法重置_id
        delete this.form._id;
        delete this.form._v;
        // 添加
        this.API.User.add(this.form).then(res => {
          this.queryUser();
        });
      }
    },
    cancel() {
      if (this.$refs.dialogForm) {
        this.$refs.dialogForm.close();
      }
      this.show = false;
    },
  },
};
</script>

<style>
.account-user {
  width: 100%;
  height: 100%;
}
</style>
