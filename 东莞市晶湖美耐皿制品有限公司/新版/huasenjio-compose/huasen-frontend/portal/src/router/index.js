import Vue from 'vue';
import Router from 'vue-router';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import state from '@/store/state/state';
import routes from '@/config/router.config.json';

// 获得路由原型
const originalPush = Router.prototype.push;
// 重写router的push方法，避免压入当前展示路由引起的报错
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 创建路由节点
const createRoute = routes => {
  return routes.reduce((processedRoutes, currentRoute) => {
    processedRoutes.push(processRouteObj(currentRoute));
    return processedRoutes;
  }, []);
};

// 传入对象作为参数，并且经过对象解构的方式获得变量。
const routePaths = [];
const processRouteObj = ({ menuCode, children, component, title, ...args }) => {
  // 收集页面的地址
  routePaths.push(args.path);
  return Object.assign(
    {
      meta: { menuCode, children, title },
      // 引入路由对应的组件
      component: () => import(/* webpackInclude: /\.(js|vue)$/ */ `@/views/${component}`),
      // 通过递归调用的方式进行都子路由的处理
      children: children ? createRoute(children) : [],
    },
    args,
  );
};

// 创建路由实例对象
Vue.use(Router);
const router = new Router({
  mode: 'hash',
  routes: createRoute(routes),
});

// 路由前置守卫
router.beforeEach((to, form, next) => {
  Nprogress.start();

  document.title = to.meta.title ? to.meta.title : document.title;
  const userCode = Number(state.user.code); // 用户的权限码
  const pageCode = Number(to.meta.menuCode); // 页面的权限码
  const pagePath = to.path; // 页面的地址
  if (!routePaths.includes(pagePath)) {
    // 页面不存在，跳转404页面，特别注意，动态路由方案不优雅，不开放访问
    next({ path: '/error404' });
  } else if (pageCode <= 0) {
    // 页面限制权限
    next();
  } else if (!userCode) {
    // 没有用户权限码，说明用户未登录，跳转登录页面
    next({ path: '/login' });
  } else if (userCode < pageCode) {
    // 没有权限，禁止访问
    next({ path: '/error403' });
  } else {
    //无异常情况，正常访问
    next();
  }
});

// 路由后置守卫
router.afterEach((to, from) => {
  Nprogress.done();
});

export default router;
