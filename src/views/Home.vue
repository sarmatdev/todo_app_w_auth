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
        <v-card class="mx-auto" max-width="600" tile>
          <v-list-item two-line>
            <v-checkbox></v-checkbox>
            <v-list-item-content>
              <v-list-item-title
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus nihil non consequatur accusamus eos ducimus, dolorum
                dolores quo voluptate eligendi accusantium ut maiores labore
                minima culpa commodi ipsum excepturi vel.</v-list-item-title
              >
              <!-- <v-list-item-subtitle>Secondary text</v-list-item-subtitle> -->
            </v-list-item-content>
            <!-- <v-spacer></v-spacer> -->

            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
        <!-- ToDo-END -->
      </v-col>
    </v-row>
    <!-- Add ToDo button -->
    <v-row>
      <v-col>
        <v-btn
          class="mx-2"
          @click="showInput"
          absolute
          dark
          fab
          bottom
          right
          large
          color="cyan"
        >
          <v-icon dark large>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="400px">
        <v-card>
          <v-card-title class="display-1 font-weight-regular"
            >What You want to do?</v-card-title
          >
          <v-card-text>
            <v-text-field placeholder="Type task here..."></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab dark small color="primary">
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
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
