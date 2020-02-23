<template>
  <v-app-bar app color="blue-grey darken-4" dark>
    <v-toolbar-title>ToDo App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-for="link in links" text rounded :to="link.url" :key="link.url">{{
      link.title
    }}</v-btn>
    <v-btn v-if="checkUser" @click="logOut" text rounded>Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOutUser');
      this.$router.push('/login');
    }
  },
  computed: {
    checkUser() {
      return this.$store.getters.checkUser;
    },
    links() {
      if (this.checkUser) {
        return {};
      }
      return [
        {
          title: 'Todo',
          url: '/todo'
        },
        {
          title: 'Login',
          url: '/login'
        },
        {
          title: 'Signup',
          url: '/signup'
        }
      ];
    }
  }
};
</script>

<style></style>
