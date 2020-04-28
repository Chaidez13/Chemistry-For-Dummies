<template>
  <v-container style="margin: 0 30px">
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #E57373;">TRIVIA</h1>
    </v-row>

    <select-level v-if="!gameTrivia" game="3" />
    <trivia-game v-if="gameTrivia" />
  </v-container>
</template>


<script>
import SelectLevel from "../components/SelectLevel";
import TriviaGame from "../components/TriviaGame";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    SelectLevel,
    TriviaGame
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('trivia', ["gameTrivia"])
  }
};
</script>


