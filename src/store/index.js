/* global Vue, Vuex */
import settings from './settings';
import auth from './auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    settings,
    auth,
  },
  strict: debug,
  plugins: debug ? [] : []
});