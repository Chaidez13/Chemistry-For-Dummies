<template>
  <v-container>
    <v-col align="center">
      <v-col>
        <h1 class="display-2" style="color: #ec407a; padding: 20px 0 100px">
          Tetris
        </h1>
        <v-data-table
          :headers="headers"
          :items="itemsTetris"
          hide-default-footer
          class="elevation-1"
          :loading="loading"
          loading-text="Cargando puntuaciones más altas..."
          no-data-text="No hay registros aún :("
        ></v-data-table>
      </v-col>
      <v-col>
        <h1 class="display-2" style="color: #ec407a; padding: 20px 0 100px">
          Memorama
        </h1>
        <v-data-table
          :headers="headers"
          :items="itemsMemorama"
          hide-default-footer
          class="elevation-1"
          :loading="loading"
          loading-text="Cargando puntuaciones más altas..."
          no-data-text="No hay registros aún :("
        ></v-data-table>
      </v-col>
      <v-col>
        <h1 class="display-2" style="color: #ec407a; padding: 20px 0 100px">
          Trivia
        </h1>
        <v-data-table
          :headers="headers"
          :items="itemsTrivia"
          hide-default-footer
          class="elevation-1"
          :loading="loading"
          loading-text="Cargando puntuaciones más altas..."
          no-data-text="No hay registros aún :("
        ></v-data-table>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import { getTopTen } from "../../utils/services";

export default {
  name: "Ranking",
  data: () => ({
    headers: [
      {
        text: "Nombre",
        align: "start",
        value: "nombre",
      },
      { text: "Apellido", value: "apellidoPaterno" },
      { text: "Puntos", value: "puntos" },
    ],
    itemsTetris: [],
    itemsMemorama: [],
    itemsTrivia: [],
    loading: true,
  }),
  mounted: function () {
    getTopTen()
      .then((r) => {
        this.itemsTetris = r.data.tetris;
        this.itemsMemorama = r.data.memorama;
        this.itemsTrivia = r.data.trivia;
        this.loading = false;
      })
      .catch(() =>
        alert("Ha ocurrido un error, favor de contactar a un desarrollador.")
      );
  },
};
</script>