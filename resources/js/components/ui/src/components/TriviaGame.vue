<template>
  <v-container>
    <vidas :cantVidas="lifes" />
    <v-row align="center" justify="center">
      <h2>{{pregunta.pregunta.pregunta}}</h2>
    </v-row>
    <v-row align="center" justify="center" style="margin: 50px 0">
      <v-col
        v-for="(item, i) in answerOp"
        :key="i"
        cols="4"
        class="answer-option"
        @click="responder(pregunta, item)"
      >
        <p class="text-center" style="margin-top: 70px">{{item.respuesta}}</p>
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
import axios from "axios";
export default {
  data() {
    return {
      questions: [],
      pregunta: {},
      answerOp: [],
      message: "",
      progreso: 0,
      actual: null,
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
    this.getQuestion()
  },
  methods: {
    ...mapMutations(["setGameTriviaOn", "setGameTriviaOff"]),
    getQuestion: async function(){
      await axios.get('/api/duolingo/respuestas').then(response => {
          this.questions = this.shuffle(response.data)
          this.actual = 0
          this.newQuestion()
        }).catch(error => console.log(error))
    },
    newQuestion(){
      var i = 0;
      this.answerOp = []
      this.pregunta = this.questions[this.actual]
      this.answerOp.push({
        id: this.pregunta.pregunta.id,
        respuesta: this.pregunta.respuesta
      })
      do {
        let aux = Math.trunc(Math.random() * this.questions.length);
        let othrAnswer = {
          id: this.questions[aux].idPregunta,
          respuesta: this.questions[aux].respuesta,
        }
        if (this.answerOp.indexOf(othrAnswer) == -1) {
          this.answerOp.push(othrAnswer);
          i++;
          console.log(i)
        }
     }while (i < 3);
     this.shuffle(this.answerOp);
    },
    resetGame() {
      this.lifes = 3;
      this.progreso = 0;
      this.time = 0;
    },
    responder(question, answer) {
      if (question.idPregunta == answer.id) {
        this.next();
      } else {
        this.lifes--;
        this.message = "INCORRECTO";
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
    },
    next() {
      this.progreso += 10;
      this.time = 0;
      this.actual ++;
      this.message = "CORRECTO";
      this.newQuestion()
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
