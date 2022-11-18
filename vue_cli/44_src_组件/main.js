// 引入 Vue
import Vue from 'vue';
// 引入 App
import App from './App.vue';

// 完整引入
// 引入 element-ui 组件库
// import ElementUI from 'element-ui';
// 引入 element-ui 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Row, Button, Slider, DatePicker } from 'element-ui';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;
// 应用 element-ui
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Slider.name, Slider);
Vue.component(DatePicker.name, DatePicker);

// 创建 vm
new Vue({
  el: '#app',
  render: (h) => h(App),
});
