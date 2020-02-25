<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" align="center">
        <h1 color="blue lighten-2">Todos Page</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TodosList />
      </v-col>
    </v-row>
    <TodoInput />
  </v-container>
</template>

<script>
import TodosList from '../components/TodosList';
import TodoInput from '../components/TodoInput';
export default {
  components: {
    TodosList,
    TodoInput,
  }
};
</script>

<style></style>
