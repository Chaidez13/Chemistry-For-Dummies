<template>
  <v-container style="margin: 0 30px">
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #E57373;">TRIVIA</h1>
    </v-row>

    <select-level :levels="niveles" v-if="!gameTrivia" game="2" />

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
      niveles: [
        {
          progreso: 100,
          nombre: "Nuevo ingreso",
          icon: "mdi-account-tie",
          color: "amber lighten-2",
          dificultad: 4,
          status: true
        },
        {
          progreso: 0,
          nombre: "Crisol para niños",
          icon: "mdi-test-tube",
          color: "amber lighten-2",
          dificultad: 8,
          status: true
        },
        {
          progreso: 0,
          nombre: "Al' Matraz",
          icon: "mdi-beaker",
          color: "amber lighten-1",
          dificultad: 12,
          status: false
        },
        {
          progreso: 0,
          nombre: "John Dalton",
          icon: "mdi-atom",
          color: "amber darken-1",
          dificultad: 16,
          status: false
        },
        {
          progreso: 0,
          nombre: "Ernest Rutherford",
          icon: "mdi-radioactive",
          color: "amber darken-2",
          dificultad: 20,
          status: false
        }
      ]
    };
  },
  computed: {
    ...mapState(["gameTrivia"])
  }
};
</script>


