import { GET_INVITE_DETAILS } from './mutations-types';
const state = {
  details: {},
};

const mutations = {
  [GET_INVITE_DETAILS](state, payload) {
    state.details = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
