/*
 * @Autor: huasenjio
 * @Date: 2021-08-25 01:53:35
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-05-28 13:24:58
 * @Description: 注册全局指令
 */

import Vue from 'vue';

import unloadImg from '@/assets/img/error/image-error.png';
import loadImg from '@/assets/img/loading/3.gif';

import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

// 图片标签懒加载
Vue.directive('lazy', {
  inserted: handleLazy,
  componentUpdated: handleLazy,
});
function handleLazy(el, binding) {
  let url = el.src;
  // 清空加载资源
  el.src = loadImg;
  let { unload = unloadImg } = binding.value || {};
  // 元素进入离开可视区域触发回调
  let observe = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      el.src = url;
      el.onload = function() {
        observe.unobserve(el);
      };
      el.onerror = function() {
        // 加载失败时
        el.src = unload;
        observe.unobserve(el);
      };
    }
  });
  observe.observe(el);
}

// markdown代码高亮
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

// 自动获取焦点指令
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中会获得焦点
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  },
});

// 子元素间隔相等
Vue.directive('balance', {
  inserted: function(el) {
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';
    if (el.childElementCount != 0) {
      handleBalance(el);
    }
    addresize(el, handleBalance);
  },
  componentUpdated(el) {
    handleBalance(el);
  },
});

// 根据可视窗口缩放大小指令
Vue.directive('AutoScale', {
  inserted: function(el) {
    el.style.transformOrigin = 'left top';
    // 执行立即缩放
    handleScale(el);
    // 增加缩放监听
    addresize(el, handleScale);
  },
  componentUpdated(el) {
    // 组件更新时缩放
    handleScale(el);
  },
});

// 拖拽指令
Vue.directive('drag', {
  inserted: function(el) {
    el.onmousedown = function(e) {
      const disx = e.pageX - el.offsetLeft;
      const disy = e.pageY - el.offsetTop;
      document.onmousemove = function(event) {
        el.style.left = event.pageX - disx + 'px';
        el.style.top = event.pageY - disy + 'px';
      };
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
        const resizeEvent = new Event('resize');
        window.dispatchEvent(resizeEvent);
      };
    };
  },
});

// 指令辅助函数
function addresize(dom, fn) {
  // 冗余备份，兼容缩放策略
  let w = dom.offsetWidth;
  let h = dom.offsetHeight;
  let oldfn = window.onresize;
  if (oldfn) {
    window.onresize = function() {
      // 若resize回调存在，则调用绑定window上下午，直接执行一遍
      oldfn.call(window);
      if (dom.offsetWidth != w || dom.offsetHeight != h) {
        w = dom.offsetWidth;
        h = dom.offsetHeight;
        // 执行回调方法
        fn.call(dom, dom);
      }
    };
  }
  // 较优解决方案
  if (!dom._resizeObserver) {
    dom._resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        fn.call(dom, dom, width, height);
      }
    });
    dom._resizeObserver.observe(dom);
    // 当不再监听时，断开观察
    // resizeObserver.disconnect();
  }
}

function handleBalance(el) {
  // 父容器无宽度 || 没有子节点
  let pWidth = el.clientWidth - 2;
  if (el.childElementCount === 0 || pWidth <= 0) return;
  // 获取所有的子节点，并且转换成为数组
  let childs = [...el.childNodes];
  // 找出子节点中最大的宽度
  let childMaxWidth = childs.reduce((pre, cur) => {
    let width = cur.getBoundingClientRect().width;
    return pre > width ? pre : width;
  }, 0);
  let rowCount = 0;
  let count = 0;
  count = pWidth / childMaxWidth;
  if (Number.isInteger(count)) {
    // 整除
    rowCount = count;
  } else {
    // 向下取整
    rowCount = Math.floor(count);
  }
  // 父容器装不下子元素，不需要调整间距
  if (rowCount === 0) return;
  // 计算剩余间隙，用于计算 margin 值，保留两位小数，并且不四舍五入
  let space = pWidth - rowCount * childMaxWidth;
  let margin = parseInt((space / rowCount / 2) * 100) / 100;

  childs.forEach(item => {
    item.style.marginLeft = `${margin}px`;
    item.style.marginRight = `${margin}px`;
  });
}

// 默认认为屏幕尺寸为1920*1080
function handleScale(el) {
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;
  // 台式电脑分辨率
  el.style.transform = `scale(${width / 1920}, ${height / 1080})`;
  // mac电脑屏幕分辨率
  // el.style.transform = `scale(${width / 1440}, ${height / 820})`
}
