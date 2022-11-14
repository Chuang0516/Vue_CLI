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
const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: TheAbout,
      meta: { title: '关于' },
    },
    {
      name: 'home',
      path: '/home',
      component: TheHome,
      meta: { title: '主页' },
      children: [
        {
          name: 'news',
          path: 'news',
          component: HomeNews,
          meta: { isAuth: true, title: '新闻' },
        },
        {
          name: 'message',
          path: 'message',
          component: HomeMessage,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: MessageDetail,
              meta: { isAuth: true, title: '详情' },

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

// 全局前置路由守卫 --- 初始化的时候、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'wecreate') {
      next();
    } else {
      alert('学校名不对，无权限查看！');
    }
  } else {
    next();
  }
});

// 全局后置路由守卫 --- 初始化的时候、每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log('后置路由守卫');
  console.log(to, from);
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'wecreate系统';
  }
});

export default router;
