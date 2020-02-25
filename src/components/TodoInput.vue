<template>
  <v-row justify="center">
    <v-dialog max-width="400px" v-model="dialog">
      <v-card>
        <v-card-title class="title font-weight-regular"
          >What You want to do?</v-card-title
        >
        <v-card-text>
          <v-text-field
            placeholder="Type task here..."
            v-model="todo"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" block dark @click="addTodo"
            >Add task
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      class="mx-2"
      fixed
      bottom
      right
      dark
      fab
      large
      color="cyan"
      @click="showDialog"
    >
      <v-icon dark large>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: ['updatable'],
  data() {
    return {
      dialog: false,
      todo: ''
    };
  },
  methods: {
    showDialog() {
      this.dialog = !this.dialog;
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.todo);
      this.todo = '';
      this.dialog = false;
    }
  }
};
</script>

<style></style>
