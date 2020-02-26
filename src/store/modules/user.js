import firebaseApp from 'firebase/app';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user);
    }
  },
  actions: {
    signUp({ commit }, { name, email, password }) {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: name
          });
          console.log(res.user);
          const user = {
            name,
            id: res.user.uid,
            email: res.user.email
          };
          commit('setUser', user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logIn({ commit }, { email, password }) {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          const user = {
            name: res.user.displayName,
            id: res.user.uid,
            email: res.user.email
          };
          commit('setUser', user);
        })
        .catch();
    },
    logOut({ commit }) {
      firebaseApp.auth().signOut();
      commit('setUser', null);
    },
    stayLogged({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    checkUser(state) {
      return state.user !== null;
    }
  }
};
