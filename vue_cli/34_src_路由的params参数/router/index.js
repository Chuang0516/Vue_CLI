import VueRouter from 'vue-router';

// 引入组件
import TheAbout from '../pages/TheAbout';
import TheHome from '../pages/TheHome';
import HomeNews from '../pages/HomeNews';
import HomeMessage from '../pages/HomeMessage';
import MessageDetail from '../pages/MessageDetail.vue';

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
              path: 'detail/:id/:title',
              component: MessageDetail,
            },
          ],
        },
      ],
    },
  ],
});
