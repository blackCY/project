/**
 * 对组件的缓存操作
 *
 * @param{keepAliveInclude} 缓存组
 */

import { ADD_KEEP_ALIVE_ROUTER, DELETE_KEEP_ALIVE_ROUTER } from './mutations-types';

const state = {
  keepAliveInclude: [],
};

const getters = {
  keepInclude: state => state.keepAliveInclude,
};

const mutations = {
  // 加入缓存
  [ADD_KEEP_ALIVE_ROUTER](state, payload) {
    state.keepAliveInclude.push(payload.include);
  },
  // 离开缓存
  [DELETE_KEEP_ALIVE_ROUTER](state, payload) {
    // 将此缓存组件从缓存组中清除
    state.keepAliveInclude.splice(state.keepAliveInclude.indexOf(payload.exclude), 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
