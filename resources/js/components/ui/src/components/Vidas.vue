<template>
  <v-content>
    <v-row justify="end">
      <v-col cols="10" md="3" lg="3">
        <v-row>
          <h4 class="text-center">Vidas</h4>
        </v-row>
        <v-row>
          <v-col>
            <v-icon v-if="cantVidas > 0" color="teal darken-2">mdi-test-tube</v-icon>
            <v-icon v-else>mdi-test-tube-empty</v-icon>
          </v-col>
          <v-col>
            <v-icon v-if="cantVidas > 1" color="teal darken-2">mdi-test-tube</v-icon>
            <v-icon v-else>mdi-test-tube-empty</v-icon>
          </v-col>
          <v-col>
            <v-icon v-if="cantVidas > 2" color="teal darken-2">mdi-test-tube</v-icon>
            <v-icon v-else>mdi-test-tube-empty</v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  props: ["cantVidas"],
  data() {
    return {};
  },
  created() {
    console.log(this.cantVidas);
  }
};
</script>