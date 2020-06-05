import Vue from 'vue';
import Vuex from 'vuex';

import keepAlive from './modules/keepAlive';
import nav from './modules/nav';
import invite from './modules/invite';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keepAlive,
    nav,
    invite,
  },
});
