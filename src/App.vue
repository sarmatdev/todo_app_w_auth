<template>
  <v-app style="background: #78909C;">
    <app-header></app-header>
    <v-content>
      <app-login></app-login>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appHeader from './components/Header';
import appFooter from './components/Footer';
import appLogin from './views/Login';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter,
    appLogin
  },
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
