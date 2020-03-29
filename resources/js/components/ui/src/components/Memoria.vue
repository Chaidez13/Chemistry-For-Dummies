<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #90A4AE;">MEMORIA</h1>
    </v-row>

    <select-level :levels="niveles" v-if="!gameMemoria" game="1" />
    <memoria-game cantCartas="10" v-if="gameMemoria" />
  </v-container>
</template>

<script>
import { mapState, mapActions, Store, mapMutations } from "vuex";
import MemoriaGame from "../components/MemoriaGame";
import SelectLevel from "../components/SelectLevel";
export default {
  data() {
    return {
      game: false,
      cantidad: 0,
      niveles: [
        {
          progreso: 100,
          nombre: "Nuevo ingreso",
          icon: "mdi-account-tie",
          color: "blue-grey lighten-3",
          dificultad: 4,
          status: true
        },
        {
          progreso: 0,
          nombre: "Limpiador de tubos de ensayo",
          icon: "mdi-test-tube",
          color: "blue-grey lighten-2",
          dificultad: 8,
          status: true
        },
        {
          progreso: 0,
          nombre: "Titulador profesional",
          icon: "mdi-beaker",
          color: "blue-grey lighten-1",
          dificultad: 12,
          status: false
        },
        {
          progreso: 0,
          nombre: "Louis Pasteur",
          icon: "mdi-atom",
          color: "blue-grey darken-1",
          dificultad: 16,
          status: false
        },
        {
          progreso: 0,
          nombre: "Marie Curie",
          icon: "mdi-radioactive",
          color: "blue-grey darken-2",
          dificultad: 20,
          status: false
        }
      ]
    };
  },
  components: {
    MemoriaGame,
    SelectLevel
  },
  methods: {
    ...mapMutations(["setGameMemoriaOn", "setGameMemoriaOff"])
  },
  computed: {
    ...mapState(["gameMemoria"])
  },
  beforeMount() {
    this.setGameMemoriaOff;
  }
};
</script>


/* async getElments() { try { let data = await axios.get(
"https://raw.githubusercontent.com/neelpatel05/periodic-table-api/master/home/neelpatel05/data.json"
); console.log(data); this.datosTabla = data; } catch (error) {
console.log(error); } }, */
