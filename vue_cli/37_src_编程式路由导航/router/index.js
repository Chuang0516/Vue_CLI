import VueRouter from 'vue-router';

// 引入组件
import TheAbout from '../pages/TheAbout';
import TheHome from '../pages/TheHome';
import HomeNews from '../pages/HomeNews';
import HomeMessage from '../pages/HomeMessage';
import MessageDetail from '../pages/MessageDetail.vue';

// 解决跳转重复路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 创建并导出一个路由器
export default new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: TheAbout,
    },
    {
      path: '/home',
      component: TheHome,
      children: [
        {
          path: 'news',
          component: HomeNews,
        },
        {
          path: 'message',
          component: HomeMessage,
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: MessageDetail,

              // props的第一种写法，值为对象
              // 该对象中的所有key-value都会以props的形式传给detail组件
              // props: { a: 1, b: 'hello' },

              // props的第二种写法，值为布尔值
              // props: true,

              // props的第二种写法，值为函数
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
            },
          ],
        },
      ],
    },
  ],
});
