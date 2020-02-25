<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" align="center">
        <h1 color="blue lighten-2">Home</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- ToDo-START -->
        

        <!-- ToDo-END -->
      </v-col>
    </v-row>
    <!-- Add ToDo button -->

    <v-row justify="center">
      <v-dialog  max-width="400px">
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
            <v-btn rounded color="primary" block dark>Add task</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
  
  
};
</script>

<style>

</style>
