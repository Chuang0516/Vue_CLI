// 引入 Vue
import Vue from 'vue';
// 引入 App
import App from './App.vue';
// 引入 vue-router
import VueRouter from 'vue-router';
// 引入路由器
import router from './router';
// 关闭 Vue 的生产提示
Vue.config.productionTip = false;
// 应用插件
Vue.use(VueRouter);

// 创建 vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  router: router,
});
