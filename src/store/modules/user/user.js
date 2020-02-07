import { firebaseApp } from '@/firebaseConfig.js';
import User from '../user/userData';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
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
    },
    async logIn({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit('setUser', new User(user.user.uid));
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    },
    logged({ commit }, user) {
      commit('setUser', new User(user.uid));
    },
    logOutUser({ commit }) {
      firebaseApp.auth().signOut();
      commit('setUser', null);
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
