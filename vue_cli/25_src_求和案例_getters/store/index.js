// 引入 vue
import Vue from 'vue';
// 引入 vuex
import Vuex from 'vuex';

Vue.use(Vuex);

// 准备 actions ，用于响应组件中的动作
const actions = {
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 500);
  },
};

// 准备 mutations ，用于操作数据
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};

// 准备 state ，用于存储数据
const state = {
  sum: 0, // 当前的和
};

// 准备 getters ，用于将 state 中的数据加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 创建、导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
