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
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="showInput(task.id, task.title)"
        >
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="error"
          @click="deleteTodo(task.id)"
        >
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="success">
          <v-icon dark>mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog max-width="400px" v-model="show">
      <v-card>
        <v-card-title class="title font-weight-regular"
          >Change your task</v-card-title
        >
        <v-card-text>
          <v-text-field
            placeholder="Type task here..."
            v-model="updatable.title"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" block dark @click="updateTodo">Update task</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      updatable: {
        id: Number,
        title: '',
      },
        show: false
    };
  },
  created() {
    this.$store.dispatch('loadTodos');
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    showInput(id, title) {
      this.updatable.id = id;
      this.updatable.title = title;
      this.show = true;
    },
    updateTodo() {
      this.$store.dispatch('updateTodo', this.updatable)
      console.log('Updated')
      this.show = false
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
