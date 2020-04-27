import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import memoria from './modules/memoria';
import trivia from './modules/trivia';
import tetris from './modules/tetris';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sesion:{
      status: false,
      name: null,
    },
    //States del Tetris
    gameTetris: false,
    //States de la Memoria
    
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
    
    //Mutaciones de la trivia
    setGameTriviaOff(state) {
      state.gameTrivia = false;
    },
    setGameTriviaOn(state) {
      state.gameTrivia = true;
    },
    //Mutaciones extra
    setUserData(state, payload){
      state.sesion.status = true;
      state.sesion.name = payload;
    },
    changeReport(state){
      state.reportDialog = !state.reportDialog
    },
  },
  getters: {
    auth(state){
      return state.sesion;
    }
  },
  actions:{
    validarSesion: async function( { commit } ){
      await axios.get('/user/datos',{
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
       }).then(response =>{
        commit('setUserData', response.data.nombre)
      }).catch(e => e);
    },
  },
  modules:{
    tetris,
    trivia,
    memoria,
  }
});
