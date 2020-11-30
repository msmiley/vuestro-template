/* global axios */

const EXAMPLE_URI = 'http://localhost:3000/api/v1/example';

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
      axios.get(EXAMPLE_URI).then((res) => {
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
