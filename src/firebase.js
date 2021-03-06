import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import store from './store'

const config = {
  apiKey: process.env.VUE_APP_FB_API,
  authDomain: 'todo-app-w-auth-b3006.firebaseapp.com',
  databaseURL: 'https://todo-app-w-auth-b3006.firebaseio.com',
  projectId: 'todo-app-w-auth-b3006',
  storageBucket: 'todo-app-w-auth-b3006.appspot.com',
  messagingSenderId: '150582566009',
  appId: '1:150582566009:web:39c3f55ddeef8dab8bc8a8',
  measurementId: 'G-3CQ72M09TT'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('stayLogged', user)
  }
});

const firestore = firebaseApp.firestore();
firestore.settings({});
export default firestore;
