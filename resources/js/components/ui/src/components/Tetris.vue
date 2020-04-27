<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #90A4AE;">TETRIS</h1>
    </v-row>
    <select-level :levels="niveles" game="1" />
  </v-container>
</template>

<script>
import SelectLevel from "../components/SelectLevel";
export default {
  components: {
    SelectLevel
  },
  data() {
    return {
      niveles: [
        {
          progreso: 100,
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
          status: true
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
      //Estos datos deben venir de la base de datos:
    };
  },
  computed: {}
};
</script>

<style scoped>
</style>