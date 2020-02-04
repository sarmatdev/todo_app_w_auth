<template>
  <v-container>
    <!-- <v-progress-circular
      size="70"
      width="7"
      color="purple"
      indeterminate
    ></v-progress-circular> -->
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">SignUp</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Your name"
            prepend-icon="mdi-account"
            v-model="formData.name"
          />
          <v-text-field
            label="Email"
            type="email"
            prepend-icon="mdi-email"
            v-model="formData.email"
          />
          <v-text-field
            type="password"
            label="Password"
            prepend-icon="mdi-lock"
            v-model="formData.password"
          />
          <v-text-field
            type="password"
            label="Re-type password"
            prepend-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" @click="signUp()">SignUp</v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/login" color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
    <!-- Overlay -->

    <v-overlay value="overlay" v-if="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <!-- Snackbar -->
    <!-- <v-snackbar v-model="snackbar" :timeout="timeout" right top>
      {{ submitStatus }}
    </v-snackbar> -->
  </v-container>
</template>

<script>
// import store from '../store';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      snackbar: true,
      timeout: 2000,
      submitStatus: 'pereved',
    };
  },
  methods: {
    signUp() {
      this.$store
        .dispatch('signUp', {
          email: this.formData.email,
          password: this.formData.password
        })
        .then(() => {
          console.log('Account registered');
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  }
};
</script>

<style></style>
