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
        <v-list class="mx-auto">
          <v-card class="mx-auto mb-5" max-width="500px">
            <v-card-text class="subtitle-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              modi, quod odit iure vel quisquam fuga laudantium voluptas ipsa
              aspernatur sit, deserunt numquam!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="error">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="success">
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto mb-5" max-width="500px">
            <v-card-text class="subtitle-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              modi, quod odit iure vel quisquam fuga laudantium voluptas ipsa
              aspernatur sit, deserunt numquam!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="error">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="success">
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto mb-5" max-width="500px">
            <v-card-text class="subtitle-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              modi, quod odit iure vel quisquam fuga laudantium voluptas ipsa
              aspernatur sit, deserunt numquam!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="error">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="success">
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto mb-5" max-width="500px">
            <v-card-text class="subtitle-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              modi, quod odit iure vel quisquam fuga laudantium voluptas ipsa
              aspernatur sit, deserunt numquam!
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="error">
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="success">
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
            <v-text-field placeholder="Type task here..."></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="primary" block dark>Add task</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-btn
      class="mx-2"
      @click="showInput"
      fixed

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
      dialog: false
    };
  },
  methods: {
    showInput() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style></style>
