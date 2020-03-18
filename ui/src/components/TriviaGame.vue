<template>
  <v-container>
    <vidas :cantVidas="lifes" />
    <v-row align="center" justify="center">
      <h2>{{pregunta.pregunta}}</h2>
    </v-row>
    <v-row align="center" justify="center" style="margin: 50px 0">
      <v-col
        v-for="(item, i) in answerOp"
        :key="i"
        cols="4"
        class="answer-option"
        @click="responder(pregunta, item)"
      >
        <p class="text-center" style="margin-top: 70px">{{item}}</p>
      </v-col>
    </v-row>
    <time-bar :time="time" />
    <v-row align="center" justify="center" class="pa-5">
      <h3>{{message}}</h3>
    </v-row>
    <v-row align="center" justify="center">
      <v-progress-linear :value="progreso" rounded height="10px" style="max-width: 800px"></v-progress-linear>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: 4%">
      <v-btn @click="setGameTriviaOff" color="danger">Salir</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Vidas from "../components/Vidas";
import TimeBar from "../components/TimeBar";
export default {
  data() {
    return {
      pregunta: {
        pregunta: "¿Qué elemento corresponde a este simbolo 'H'?",
        respuestaC: "Hidrogeno",
        dificultad: 1
      },
      respuestaI: [
        "Hidrogeno",
        "Ben 10",
        "Hierro",
        "Cobre",
        "Tungsteno",
        "Iodo",
        "Boro"
      ],
      answerOp: [],
      message: "",
      progreso: 0,
      correctState: true,
      lifes: 3,
      time: 0,
      interval: null
    };
  },
  components: {
    Vidas,
    TimeBar
  },
  created() {
    var i = 0;
    console.log(this.time);
    this.oneSecond();
    this.answerOp.push(this.pregunta.respuestaC);

    do {
      let othrAnswer = Math.trunc(Math.random() * this.respuestaI.length);
      if (this.answerOp.indexOf(this.respuestaI[othrAnswer]) == -1) {
        this.answerOp.push(this.respuestaI[othrAnswer]);
        i++;
      }
    } while (i < 3);
    this.shuffle(this.answerOp);
  },
  methods: {
    ...mapMutations(["setGameTriviaOn", "setGameTriviaOff"]),
    resetGame() {
      this.lifes = 3;
      this.progreso = 0;
      this.time = 0;
    },
    responder(question, answer) {
      if (question.respuestaC == answer) {
        this.next();
      } else {
        this.lifes--;
        this.message = "INCORRECTO";
        console.log(this.lifes);
      }
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      console.log(a);
      return a;
    },
    reset() {
      this.progreso = 0;
      this.message = "";
      this.correctState = false;
    },
    next() {
      this.progreso += 10;
      this.time = 0;
      this.message = "CORRECTO";
      this.correctState = true;
    },
    oneSecond: function() {
      this.interval = setInterval(this.timer, 1000);
    },
    timer: function() {
      this.time += 10;
    }
  },
  watch: {
    progreso: function(newProgress) {
      if (newProgress >= 100) {
        clearInterval(this.interval);
        this.message = "FELICIDADES, HA GANADO";
      }
    },
    time: function(newTime) {
      if (newTime >= 100) {
        clearInterval(this.interval);
        this.message = "GAME OVER";
      }
    }
  }
};
</script>

<style scoped>
.answer-option {
  margin: 10px;
  border-radius: 5px;
  border: 1px solid darkgray;
  background-color: lightblue;
  max-width: 170px;
  min-width: 130px;
  min-height: 200px;
}
.answer-option:hover {
  background-color: yellow;
}
</style>
