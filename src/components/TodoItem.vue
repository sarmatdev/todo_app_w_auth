<template>
  <v-container>
    <v-card
      class="mx-auto mb-5"
      max-width="500px"
      v-for="task in getTodos"
      :key="task.id"
    >
      <v-card-text class="title">
        {{ task.title }}
      </v-card-text>
      <!-- <v-card-text class="title">
        {{ task.description }}
      </v-card-text> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="error" @click="deleteTodo(task.id)">
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="success">
          <v-icon dark>mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadTodos');
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    }
  },
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
