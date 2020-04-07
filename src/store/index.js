import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keepAliveInclude: []
  },
  mutations: {
    updateKeepAliveInclude: (state, data) => {
      state.keepAliveInclude = data;
    },
    clearKeepAliveInclude: state => {
      state.keepAliveInclude = [];
    }
  }
});
