import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sesion: false,
    //States del Tetris
    gameTetris: false,
    //States de la Memoria
    gameMemoria: false,
    levelMemoria: null,
    //States de la trivia
    gameTrivia: false,
    //States extra
    reportDialog: false,
  },
  mutations: {
    //Mutaciones del tetris
    setGameTetrisOff(state) {
      state.gameTetris = false;
    },
    setGameTetrisOn(state) {
      state.gameTetris = true;
    },
    //Mutaciones de la memoria
    setGameMemoriaOff(state) {
      state.gameMemoria = false;
    },
    setGameMemoriaOn(state) {
      state.gameMemoria = true;
    },
    setLevelMemoria(state, payload){
      state.levelMemoria = payload;
    },
    //Mutaciones de la trivia
    setGameTriviaOff(state) {
      state.gameTrivia = false;
    },
    setGameTriviaOn(state) {
      state.gameTrivia = true;
    },
    //Mutaciones extra
    changeReport(state){
      state.reportDialog = !state.reportDialog
    }
  },
});
