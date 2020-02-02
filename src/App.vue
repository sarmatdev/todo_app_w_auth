<template>
  <v-app>
    <router-link to="/"><app-header></app-header></router-link>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appHeader from './components/Header';
import appFooter from './components/Footer';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
