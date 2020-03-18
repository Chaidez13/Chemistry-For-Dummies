<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1 class="display-2" style="color: #EC407A; padding: 20px 0 100px">ESTADISTICAS</h1>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in juegos" :key="i">
        <v-card>
          <v-card-title class="headline">{{item.nombre}}</v-card-title>
          <v-sparkline
            :value="item.value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
          <v-list v-for="(data, j) in item.value" :key="j">
            <v-divider></v-divider>
            <v-list-item>Estadistica: {{data}}</v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
    juegos: [
      {
        nombre: "Tetris",
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
      },
      {
        nombre: "Memoria",
        value: [0, 1, 6, 4, 3, 10, 7, 8, 2, 1, 0, 2, 3, 9, 2]
      },
      {
        nombre: "Trivia",
        value: [1, 10, 5, 3, 3, 1, 9, 0, 8, 1, 3, 4, 6, 3, 1]
      }
    ]
  })
};
</script>

<style scoped>
</style>