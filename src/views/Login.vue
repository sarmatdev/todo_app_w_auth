<template>
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
      <v-btn color="success">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/signup" color="info">SignUp</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
  }
};
</script>

<style></style>
