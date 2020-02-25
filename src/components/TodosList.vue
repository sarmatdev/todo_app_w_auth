<template>
  <v-list class="mx-auto">
    <TodoItem />
  </v-list>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  components: {
    TodoItem
  },
  created() {
    this.$store.dispatch('loadTodos');
  }
};
</script>

<style></style>
