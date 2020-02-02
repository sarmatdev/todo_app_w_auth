<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">SignUp</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Your name" prepend-icon="mdi-account" />
        <v-text-field label="Email" type="email" prepend-icon="mdi-email" />
        <v-text-field
          type="password"
          label="Password"
          prepend-icon="mdi-lock"
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
      <v-btn color="success">SignUp</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/login" color="info">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>