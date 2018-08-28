import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  conuter: number;
}

export default new Vuex.Store({
  state: {
    conuter: 0,
  } as State,
  getters: {
    getCounter: (state, getters) => () => {
      return state.conuter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.conuter += 1;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit('increment');
    },
  },
});
