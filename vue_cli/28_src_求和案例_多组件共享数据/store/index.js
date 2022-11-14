// 引入 vue
import Vue from 'vue';
// 引入 vuex
import Vuex from 'vuex';
import counterOptions from './counter';
import personOptions from './person';

Vue.use(Vuex);

// 创建、导出 store
export default new Vuex.Store({
  modules: {
    countAbout: counterOptions,
    personAbout: personOptions,
  },
});
