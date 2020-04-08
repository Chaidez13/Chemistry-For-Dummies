<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-list>
            <v-subheader>Niveles:</v-subheader>
            <div v-for="(item, i) in levels" :key="i">
              <v-divider></v-divider>
              <v-list-item @click="beginGame(item.dificultad)" :disabled="!item.status">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{item.nombre}}</v-list-item-title>
                </v-list-item-content>
                <v-progress-circular :value="item.progreso" rotate="260" :color="item.color"></v-progress-circular>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["levels", "game"],
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setGameMemoriaOn", "setGameTriviaOn", "setGameTetrisOn", "setLevelMemoria"]),
    beginGame(dificultad) {
      switch (this.game) {
        case "1":
          this.setGameMemoriaOn();
          this.setLevelMemoria(dificultad)
          break;
        case "2":
          this.setGameTriviaOn();
          break;
        case "3":
          this.setGameTetrisOn();
          break;
      }
    }
  },
  beforeMount() {}
};
</script>