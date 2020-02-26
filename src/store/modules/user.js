import firebaseApp from 'firebase/app';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log(state, payload);
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
          commit('setUser');
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {}
};
