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
      return axios.get(EXAMPLE_URI).then((res) => {
        commit('exampleDataLoaded', res.data);
      });
    },
    addExampleItem({ commit }, d) {
      // we return the axios call because it returns a promise that can be
      // used at the caller to tell when it's complete. i.e. if you use a modal
      // to add an example item, you can use .then() to know when it's done and
      // close the modal
      return axios.post(EXAMPLE_URI, d).then((res) => {
        this.dispatch('loadExampleData');
      });
    },
    updateExampleItem({ commit }, d) {
      return axios.put(`${EXAMPLE_URI}/${d._id}`, {
        $set: d // mongo update operations allowed here
      }).then((res) => {
        this.dispatch('loadExampleData');
      });
    },
    deleteExampleItem({ commit }, d) {
      return axios.delete(`${EXAMPLE_URI}/${d._id}`, d).then((res) => {
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
