import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sesion: false,
    elementsData: {},
    gameTetris: false,
    gameMemoria: false,
    gameTrivia: false,
  },
  mutations: {
    fillData(state, payload) {
      state.elementsData = payload;
    },
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
    }
  },
  actions: {
    loadData: async function({ commit }) {
      await axios
        .get(
          "https://raw.githubusercontent.com/neelpatel05/periodic-table-api/master/home/neelpatel05/data.json"
        )
        .then(response => commit("fillData", response));
    }
  }
});
