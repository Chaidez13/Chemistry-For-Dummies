<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #90A4AE;">TETRIS</h1>
    </v-row>
    <select-level game="1" />
  </v-container>
</template>

<script>
import SelectLevel from "../components/SelectLevel";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    SelectLevel,
  },
  data() {
    return {

    };
  },
  computed: {
     ...mapState('tetris', ["gameTetris"])
  }
};
</script>

<style scoped>
</style>