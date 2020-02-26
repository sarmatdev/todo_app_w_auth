<template>
  <v-snackbar v-model="snackbar" color="error" :timeout="timeout" right top>
    {{ status }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 5000,
      status: 'Dæ izær xorz!'
    };
  }
};
</script>

<style></style>
