import firebaseApp from '@/firebaseConfig.js';
import User from '../user/userData';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state);
    }
  },
  actions: {
    async signUp({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit('setUser', new User(user.user.uid));
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    checkUser(state) {
      return state.user !== null;
    }
  }
};
