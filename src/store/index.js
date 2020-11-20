/* global Vue, Vuex */
import settings from './settings';
import auth from './auth';
import example from './example';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    settings,
    auth,
    example,
  },
  strict: debug,
  plugins: debug ? [] : []
});