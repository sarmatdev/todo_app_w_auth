import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user/user';
import task from './modules/task/task';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    user,
    task
  }
});
