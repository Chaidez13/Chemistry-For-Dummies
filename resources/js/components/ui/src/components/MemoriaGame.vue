<template>
  <v-container>
    <time-bar :time="time" :color="timeColor" v-if="game" />
    <v-row align="center" justify="center" style="margin-top: 4%">
      <v-btn fab color="primary" @click="startGameButton" class="btn-game">
          <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn fab color="error" @click="setGameMemoriaOff" class="btn-game">
          <v-icon>mdi-backspace</v-icon>
      </v-btn>
    </v-row>
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
    <GameOver v-if="gameOv" :points="puntos" :status="status" game="2"/>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import GameOver from "../components/GameOver";
import CartaMemoria from "../components/CartaMemoria";
import axios from "axios";
import Vidas from "../components/Vidas";
import TimeBar from "../components/TimeBar";

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
};

export default {
  data() {
    return {
      elemets: [],
      cartas: [],
      time: 0,
      timeColor: "green darken-2",
      game: false,
      cardsActive: 0,
      anterior: null,
      difTime: 1.6666,
      gameOv: false,
      puntos: 0,
      status: false,
      cantCartas: 10,
      contadorCartas: 0,
    };
  },
  components: {
    CartaMemoria,
    Vidas,
    TimeBar,
    GameOver,
  },
  created() {
    console.log(this.levelMemoria-1)
    this.getCards()
  },
  methods: {
    ...mapMutations('memoria', ["setGameMemoriaOn", "setGameMemoriaOff"]),

    getCards: async function(){
      await axios.post('/partida/store',{
        idJuego: 2,
        idUsuario: -1,
        nivel: this.levelMemoria,
        puntos: 0,
      })
      await axios.get('/memorama/elementos').then(response => {
          this.elemets = this.chargeNElements(response.data)
          this.elemets.forEach(e => e.state = false)
          this.begin()
        }).catch(error => console.log(error))
    },
    chargeNElements(arr){
      var result = []
      const l = this.levelMemoria-1
      switch(l){
        case 0:
          result = arr.filter(d => d.groupBlock == 'noble gas')
          this.cantCartas = 6;
          return result;
        break;
        case 1:
          result = arr.filter(d => d.groupBlock == 'metalloid')
          this.cantCartas = 7;
          return result;
        break;
        case 2:
          result = arr.filter(d => d.groupBlock == 'alkaline earth metal' || d.groupBlock == 'alkali metal')
          this.cantCartas = 12;
          return result;
        case 3:
          const mel = arr.filter(d => d.groupBlock == 'transition metal')
          var n = 0;
          while(n < 15){
            var x = Math.floor(Math.random() * arr.length);
            if(result.indexOf(mel[x])==-1){
              result.push(mel[x])
              n--
            }
          } 
          this.cantCartas = 15;
          return result;
        break;
        case 4:
          var n = 0;
          while(n < 20){
            var x = Math.floor(Math.random() * arr.length);
            if(result.indexOf(arr[x])==-1){
              result.push(arr[x])
              n--
            }
          }
          this.cantCartas = 20;
          return result;
        break;
      }
    },
    //Se cargan los elementos traidos desde el BACK y se crea un arreglo con cada dato dos veces
    begin() {
      try {
        this.cartas = [];
        for (let i = 0; i < this.elemets.length; i++) {
          this.cartas.push({ info: this.elemets[i], activa: false, id: i });
          this.cartas.push({
            info:  this.elemets[i],
            activa: false,
            id: i + this.cantCartas,
          });
        }
        this.shuffle(this.cartas)
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
        if (!e.info.state) e.activa = false;
      });
    },
    enableGame() {
      this.game = true;
    },
    resetCards() {
      this.cardsActive = 0;
    },

    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },

    flipCard(item) {
      if (this.game && !item.info.state && this.cardsActive != 2) {
        if (this.cardsActive == 0 && this.anterior != item) {
          this.anterior = item;
          item.activa = true;
          this.cardsActive = 1;
        } else if (this.cardsActive == 1 && this.anterior != item) {
          item.activa = true;
          this.cardsActive = 2;

          if (this.anterior.info.symbol == item.info.symbol) {
            // SI SI
            item.info.state = true;
            this.anterior.info.state = true;
            this.resetCards()
            this.contadorCartas++;
            this.puntos += Math.trunc(100-this.time);
          } else {
            // SI NO
            setTimeout(this.coverAllCards, 500);
            setTimeout(this.resetCards, 500);
          }
          setTimeout(this.enableGame, 500);
        }
      }
    },

    gameEnded: async function(){
      this.game = false;
      this.gameOv = true;
      clearInterval(this.interval)
      await axios.post('/partida/update/2',{
        puntos: this.puntos,
        nivel: this.levelMemoria,
        estado: this.status,
        progreso: Math.trunc((this.contadorCartas * 100)/this.elemets.length),
      }).then(e => console.log('SUCCESS'))
      .catch(e => {
        console.log('ERROR')
      })
    },
    //Funciones que llevan el tiempo
    oneSecond: function() {
      this.interval = setInterval(this.timer, 1000);
    },
    timer: function() {
      this.time += this.difTime;
    },
  },
  computed: {
    ...mapState('memoria', ["gameMemoria", "levelMemoria"])
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
        this.gameEnded();
      }
    },
    contadorCartas: function(cc){
      if(cc >= this.elemets.length){
        this.status = true;
        this.gameEnded();
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
.btn-game{
  margin: 0 10px;
}
</style>