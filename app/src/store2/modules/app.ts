import Vuex, { createNamespacedHelpers } from 'vuex';
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

export interface State {
  counter: number;
}

export interface Getters {
  counter: number;
}

export interface Mutations {
  increment: {};
}

export interface Actions {
  incrementAction: {};
}

export const state: State = {
  counter: 0,
};

export const getters: DefineGetters<Getters, State> = {
  counter: (state) => state.counter,
};

export const mutations: DefineMutations<Mutations, State> = {
  increment(state, {}) {
    state.counter += 1;
  },
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
  incrementAction({ commit }, payload) {
    commit('increment', payload);
  },
};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('app');

export const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
