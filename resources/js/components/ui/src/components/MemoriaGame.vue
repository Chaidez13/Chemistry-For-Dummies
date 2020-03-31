<template>
  <v-container>
    <time-bar :time="time" :color="timeColor" v-if="game" />
    <v-row align="center" justify="center">
      <v-col
        class="carta"
        cols="4"
        sm="2"
        v-for="(item, i) in cartas"
        :key="i"
        :style="[
          item.activa
            ? { background: '#' + item.info.cpkHexColor }
            : { background: 'black' }
        ]"
        @click="flipCard(item)"
      >
        <carta-memoria :item="item" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: 4%">
      <v-btn @click="startGameButton" color="primary">Empezar</v-btn>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: 4%">
      <v-btn @click="setGameMemoriaOff" color="error">Salir</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, Store, mapMutations } from "vuex";
import CartaMemoria from "../components/CartaMemoria";
import Vidas from "../components/Vidas";
import TimeBar from "../components/TimeBar";
export default {
  props: ["cantCartas", "dificultad"],
  data() {
    return {
      elemento: {
        name: "Hydrogen",
        atomicNumber: "1",
        symbol: "H",
        atomicMass: "1.00794",
        groupBlock: "gas",
        cpkHexColor: "D9FFFF",
        state: false
      },
      cartas: [],
      datosTabla: {},
      time: 0,
      timeColor: "green darken-2",
      intervall: null,
      game: false,
      cardsActive: 0,
      cardsFliped: [],
      anterior: null,
      difTime: 1.666
    };
  },
  components: {
    CartaMemoria,
    Vidas,
    TimeBar
  },
  created() {
    this.loadData();
    this.begin();
  },
  methods: {
    ...mapActions(["loadData"]),
    ...mapMutations(["setGameMemoriaOn", "setGameMemoriaOff"]),

    //Se cargan los elementos traidos desde el BACK y se crea un arreglo con cada dato dos veces
    begin() {
      try {
        this.cartas = [];

        for (let i = 0; i < this.cantCartas; i++) {
          this.cartas.push({ info: this.elemento, activa: false, id: i });
          this.cartas.push({
            info: this.elemento,
            activa: false,
            id: i + this.cantCartas
          });
        }
        /*
        for (let i = 0; i < this.cantCartas; i++) {
          let el = Math.trunc(Math.random() * 90);
          this.cartas.push({ info: this.elementsData.data[el], activa: false });
          this.cartas.push({ info: this.elementsData.data[el], activa: false });
        }
        this.shuffle(this.cartas); */
      } catch (error) {
        console.log(error);
      }
    },

    //Empieza el juego
    startGameButton() {
      //this.flipAllCards();
      this.flipAllCards();
      setTimeout(this.coverAllCards, 3000);
      setTimeout(this.oneSecond, 3000);
      setTimeout(this.enableGame, 3000);
      //this.oneSecond();
    },
    flipAllCards() {
      this.cartas.forEach(e => {
        e.activa = true;
      });
    },
    coverAllCards() {
      this.cartas.forEach(e => {
        if (!e.state) e.activa = false;
      });
    },
    enableGame() {
      this.game = true;
    },
    resetCards() {
      this.cardsActive = 0;
    },

    /*
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },*/

    flipCard(item) {
      console.log(this.cardsActive);
      if (this.game && !item.state && this.cardsActive != 2) {
        if (this.cardsActive == 0 && this.anterior != item) {
          this.anterior = item;
          item.activa = true;
          this.cardsActive = 1;
        } else if (this.cardsActive == 1) {
          item.activa = true;
          this.cardsActive = 2;

          if (this.anterior.symbol == item.symbol) {
            // SI SI
          } else {
            // SI NO
          }
          //ESTO VA AL SINO -------------------
          setTimeout(this.coverAllCards, 1000);
          setTimeout(this.resetCards, 1000);
          // ----------------------------------
          setTimeout(this.enableGame, 1000);
        }
      }
    },

    //Funciones que llevan el tiempo
    oneSecond: function() {
      this.interval = setInterval(this.timer, 1000);
    },
    timer: function() {
      this.time += this.difTime;
    }
  },
  computed: {
    ...mapState(["elementsData", "gameMemoria"])
  },
  watch: {
    time: function(newTime) {
      if (newTime > 60) {
        this.timeColor = "amber darken-2";
      }
      if (newTime > 80) {
        this.timeColor = "red darken-3";
      }
      if (newTime >= 100) {
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<style scoped>
.carta {
  margin: 20px;
  border-radius: 5px;
  border: 1px solid darkgray;
  max-width: 150px;
  min-width: 130px;
  min-height: 210px;
}
</style>