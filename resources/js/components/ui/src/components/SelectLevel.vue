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
import { mapMutations, mapActions, mapState } from "vuex";
import axios from 'axios';

export default {
  props: ["game"],
  data() {
    return {
      levels: [],
    };
  },
  created(){
    switch (this.game) {
        case "2":
          this.updateLevelDataMM();
          this.levels = this.nivelesMM;
          break;
        case "3":
          this.updateLevelDataTR();
          this.levels = this.nivelesTR;
          break;
        case "1":
          this.setGameTetrisOn();
          break;
      }
  },
  computed: {
    ...mapState('memoria', ['nivelesMM']),
    ...mapState('trivia', ['nivelesTR']),
  },
  methods: {
    ...mapMutations(["setGameTetrisOn"]),
    ...mapMutations('memoria', ['setGameMemoriaOn', 'setLevelMemoria']),
    ...mapActions('memoria', ['updateLevelDataMM']),
    ...mapMutations('trivia', ['setGameTriviaOn', 'setLevelTrivia']),
    ...mapActions('trivia', ['updateLevelDataTR']),
/*     getProgress: async function(){
      await axios.get('/partida/all',{
         headers: {
           'X-Requested-With': 'XMLHttpRequest',
           'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
         }
        }).then(d => {
          const progress = d.data.filter(e => e.idJuego == this.game)
          for (let i = 0; i < progress.length; i++) {
            this.datosNivel[i].progreso = progress[i].puntos;
            this.datosNivel[i+1].status = progress[i].estado;
          }
          console.log(this.datosNivel)
        })
    }, */
    beginGame(dificultad) {
      switch (this.game) {
        case "2":
          this.setGameMemoriaOn();
          this.setLevelMemoria(dificultad)
          break;
        case "3":
          this.setGameTriviaOn();
          this.setLevelTrivia(dificultad)
          break;
        case "1":
          this.setGameTetrisOn();
          break;
      }
    }
  },
};
</script>