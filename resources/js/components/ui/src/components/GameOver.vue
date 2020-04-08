<template>
    <v-dialog persistent v-model="dialog" max-width="400">
      <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="require('../assets/gameOver.jpg')">
            <v-card-title>
                GAME OVER
            </v-card-title>
          </v-img>
          <v-card-text>
              Puntuación:
          </v-card-text>
          <v-card-actions class="justify-end">
              <v-btn color="blue darken-1" text @click="getOut">Salir</v-btn>
              <v-btn color="blue darken-1" text>Reintentar</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  data: () => ({
      dialog: true,
  }),
  methods:{
      getOut(){
          this.$router.push({ name: "games" });
      }
  },
  computed:{
    ...mapState(['reportDialog'])
  }
};
</script>