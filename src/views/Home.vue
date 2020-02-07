<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" align="center">
        <h1 color="blue lighten-2">Your ToDos</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- ToDo-START -->
        {{ getTasks }}
        <v-list class="mx-auto">
          <v-card
            class="mx-auto mb-5"
            max-width="500px"
            v-for="task in getTasks"
            :key="task.id"
          >
            <v-card-text class="title" :class="{ done }">
              {{ task.title }}
            </v-card-text>
            <v-card-text class="title" :class="{ done }">
              {{ task.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="error">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="success"
                @click="checkDone"
              >
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-list>

        <!-- ToDo-END -->
      </v-col>
    </v-row>
    <!-- Add ToDo button -->

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="400px">
        <v-card>
          <v-card-title class="title font-weight-regular"
            >What You want to do?</v-card-title
          >
          <v-card-text>
            <v-text-field
              v-model="task.title"
              placeholder="Type task here..."
            ></v-text-field>
            <v-text-field
              v-model="task.description"
              placeholder="Description (optional)"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="primary" block dark @click="saveTask"
              >Add task</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn
      class="mx-2"
      @click="showInput"
      fixed
      bottom
      right
      dark
      fab
      large
      color="cyan"
    >
      <v-icon dark large>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      done: false,
      task: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    showInput() {
      this.dialog = !this.dialog;
    },
    checkDone() {
      this.done = !this.done;
    },
    saveTask() {
      this.$store.dispatch('newTask', this.task);
    }
  },
  computed: {
    getTasks() {
      return this.$store.getters.getTasks;
      // return [
      //   {
      //     title: 1,
      //     description: 1,
      //     id: 1
      //   },
      //   {
      //     title: 2,
      //     description: 2,
      //     id: 2
      //   }
      // ];
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
