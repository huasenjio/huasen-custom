export default {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : '/server/',
  appMinWidth: 1280,
  localManage: 'localManage',
  dictionary: {
    // 权限码
    code: [
      {
        value: 0,
        label: '0-普通用户',
      },
      {
        value: 1,
        label: '1-管理员',
      },
    ],
  },
};
