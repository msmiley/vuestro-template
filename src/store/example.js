/* global axios */

const EXAMPLE_URI = 'http://localhost:3000/api/v1/example';

export default {
  state: {
    loaded: false,
    exampleData: [],
  },
  getters: {
    isExampleDataLoaded(state) {
      return state.loaded;
    },
    exampleData(state) {
      return state.exampleData;
    },
  },
  actions: {
    loadExampleData({ commit }) {
      axios.get(EXAMPLE_URI).then((res) => {
        commit('exampleDataLoaded', res.data);
      });
    },
    addExampleItem({ commit }, d) {
      axios.post(EXAMPLE_URI, d).then((res) => {
        this.dispatch('loadExampleData');
      });
    },
    updateExampleItem({ commit }, d) {
      axios.put(`${EXAMPLE_URI}/${d._id}`, {
        $set: d // mongo update operations allowed here
      }).then((res) => {
        this.dispatch('loadExampleData');
      });
    },
    deleteExampleItem({ commit }, d) {
      axios.delete(`${EXAMPLE_URI}/${d._id}`, d).then((res) => {
        this.dispatch('loadExampleData');
      });
    },
  },
  mutations: {
    exampleDataLoaded(state, data) {
      state.exampleData = data;
      state.loaded = true;
    },
  },
};
