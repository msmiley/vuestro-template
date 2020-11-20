/* global axios */

export default {
  state: {
    exampleData: [],
  },
  getters: {
    types(state) {
      return state.types;
    },
  },
  actions: {
    loadExampleData({ commit }) {
      axios.get('/api/v1/example').then((res) => {
        commit('exampleDataLoaded', res.data);
      });
    },
    addExampleItem({ commit }) {
    }
  },
  mutations: {
    exampleDataLoaded(state, data) {
      state.exampleData = data;
    },
  },
};
