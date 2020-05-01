import axios from 'axios'

export default {
    namespaced: true,
    state:{ 
        gameTetris: false,
        levelTetris: null,
        nivelesTT: [
            {
              progreso: 0,
              nombre: "Nuevo ingreso",
              icon: "mdi-account-tie",
              color: "red lighten-2",
              dificultad: 4,
              status: true
            },
            {
              progreso: 0,
              nombre: "Probador de probetas",
              icon: "mdi-test-tube",
              color: "red lighten-2",
              dificultad: 8,
              status: false
            },
            {
              progreso: 0,
              nombre: "pH-rofesional",
              icon: "mdi-beaker",
              color: "red lighten-1",
              dificultad: 12,
              status: false
            },
            {
              progreso: 0,
              nombre: "Antoine Lavoisier",
              icon: "mdi-atom",
              color: "red darken-1",
              dificultad: 16,
              status: false
            },
            {
              progreso: 0,
              nombre: "Michael Faraday",
              icon: "mdi-radioactive",
              color: "red darken-2",
              dificultad: 20,
              status: false
            }
          ]
    },
    mutations:{ 
        setGameTetrisOff(state) {
            state.gameMemoria = false;
        },
        setGameTetrisOn(state) {
            state.gameMemoria = true;
        },
        setLevelTetris(state, payload){
            state.levelMemoria = payload;
        },
        setLevelData(state, payload){
            state.nivelesMM[payload.position].progreso = payload.progreso;
            if(payload.position !== 5)
            state.nivelesMM[(payload.position) + 1].status = payload.estado;
        }
    },
    actions:{ 
        updateLevelDataTT: async function( { commit } ){
            await axios.get('/partida/all',{
                headers: {
                  'X-Requested-With': 'XMLHttpRequest',
                  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                }
               }).then(d => {
                 const progress = d.data.filter(e => e.idJuego == 1)
                 for (let i = 0; i < progress.length; i++) {
                    const payload = {
                        position: i,
                        progreso: progress[i].progreso,
                        estado: progress[i].estado,
                    }
                    commit('setLevelData', payload)
                 }
               })
        },
    },
}