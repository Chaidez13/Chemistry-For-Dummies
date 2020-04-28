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

    //States extra
    reportDialog: false,
    warningDialog: false,
    changesDialog: false,
  },
  mutations: {
    //Mutaciones del tetris
    setGameTetrisOff(state) {
      state.gameTetris = false;
    },
    setGameTetrisOn(state) {
      state.gameTetris = true;
    },
   
    //Mutaciones extra
    setUserData(state, payload){
      state.sesion.status = true;
      state.sesion.name = payload;
    },
    logOut(state){
      state.sesion = {
        status: false,
        name: null,
      }
    },
    changeReport(state){
      state.reportDialog = !state.reportDialog
    },
    changeWarning(state){
      state.warningDialog = !state.warningDialog
    },
    changeChanges(state){
      state.changesDialog = !state.changesDialog
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
