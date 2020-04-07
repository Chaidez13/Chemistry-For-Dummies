import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sesion: false,
    gameTetris: false,
    gameMemoria: false,
    gameTrivia: false,
    reportDialog: false,
  },
  mutations: {
    setGameMemoriaOff(state) {
      state.gameMemoria = false;
    },
    setGameMemoriaOn(state) {
      state.gameMemoria = true;
    },
    setGameTriviaOff(state) {
      state.gameTrivia = false;
    },
    setGameTriviaOn(state) {
      state.gameTrivia = true;
    },
    setGameTetrisOff(state) {
      state.gameTetris = false;
    },
    setGameTetrisOn(state) {
      state.gameTetris = true;
    },
    changeReport(state){
      state.reportDialog = !state.reportDialog
    }
  },
});
