import VueRouter from 'vue-router';

// 引入组件
import TheAbout from '../pages/TheAbout';
import TheHome from '../pages/TheHome';

// 创建并导出一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: TheAbout,
    },
    {
      path: '/home',
      component: TheHome,
    },
  ],
});
