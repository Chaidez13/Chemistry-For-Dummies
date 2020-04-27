<template>
    <v-dialog persistent v-model="dialog" max-width="400">
      <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="((status)?require('../assets/win.jpg'):require('../assets/gameOver.jpg'))">
            <v-card-title>
                GAME OVER
            </v-card-title>
          </v-img>
          <v-card-subtitle v-if="status">Felicidades! Has superado este nivel.</v-card-subtitle>
          <v-card-subtitle v-if="!status">Salsa tartara! Has fracasado este nivel 😢 intentalo de nuevo.</v-card-subtitle>
          <v-card-text>
              Puntuación: {{points}}
          </v-card-text>
          <v-card-actions class="justify-end">
              <v-btn color="blue darken-1" text @click="getOut">Salir</v-btn>
              <v-btn v-if="!status" color="blue darken-1" text>Reintentar</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  props: ['points', 'status', 'game'],
  data: () => ({
      dialog: true,
  }),
  methods:{
    ...mapMutations(['setGameTriviaOff','setGameTetrisOff']),
    ...mapMutations('memoria', ['setGameMemoriaOff']),
      getOut(){
        switch(this.game){
          case '1':
          break;
          case '2':
            this.setGameMemoriaOff()
            break;
        }
      }
  },
  computed:{
    ...mapState(['reportDialog'])
  }
};
</script>