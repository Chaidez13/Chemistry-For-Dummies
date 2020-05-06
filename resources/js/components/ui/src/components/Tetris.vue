<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #90A4AE;">TETRIS</h1>
    </v-row>
    <select-level game="1"/>
   <!--  <tetris-game v-if="gameTetris" /> -->
  </v-container>
</template>

<script>
import SelectLevel from "../components/SelectLevel";
import TetrisGame from "../components/TetrisGame";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    SelectLevel,
    TetrisGame,
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