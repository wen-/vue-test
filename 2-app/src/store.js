import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: '简体中文',
    language:{
      简体中文: {
        webName: "中所科技",
        t1: "首页",
        t2: "区块链服务",
      },
      English: {
        webName: "LINKKT"
      }
    }
  },
  mutations: {
    changeLanguage(state, n){
      state.currentLanguage = n;
    }
  },
  actions: {}
});
