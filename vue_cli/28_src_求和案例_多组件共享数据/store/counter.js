// 求和器相关配置
export default {
  namespaced: true,
  // 准备 actions ，用于响应组件中的动作
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0, // 当前的和
    school: 'wecreate',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
