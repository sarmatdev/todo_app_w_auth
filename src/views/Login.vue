<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            type="email"
            prepend-icon="mdi-email"
            v-model="email"
          />
          <v-text-field
            type="password"
            label="Password"
            prepend-icon="mdi-lock"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="logIn" color="success">Login</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/signup" color="info">SignUp</v-btn>
      </v-card-actions>
    </v-card>
    <!-- Overlay -->
    <v-overlay value="overlay" v-if="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="snackbar" color="error" :timeout="timeout" right top>
      {{ submitStatus }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
      timeout: 3000,
      submitStatus: null
    };
  },
  methods: {
    logIn() {
      this.$store
        .dispatch('logIn', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log('Account Logged');
          this.snackbar = true;
          this.submitStatus = 'You are successfully registered!';
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error.message);
          this.snackbar = true;
          this.submitStatus = error.message;
        });
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style></style>
