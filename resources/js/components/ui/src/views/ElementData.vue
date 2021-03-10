<template>
  <v-card class="mx-auto my-12" max-width="500">
    <v-card-actions>
      <v-btn color="light-gray lighten-2" text @click="goBack()">
        <v-icon>mdi-arrow-left</v-icon> Volver
      </v-btn>
    </v-card-actions>
    <div class="symbol">{{ $props.data.symbol }}</div>
    <v-card-title>{{ $props.data.name }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>Número atómico: {{ $props.data.number }}</v-col>
        <v-col>Masa atómico: {{ $props.data.atomic_mass }}</v-col>
      </v-row>
      <v-row>
        <v-col>Categoría: {{ $props.data.category }}</v-col>
        <v-col>Fase: {{ $props.data.phase }}</v-col>
      </v-row>
      <v-row>
        <v-col>Densidad: {{ $props.data.density }}</v-col>
        <v-col
          >Configuración electrónica:
          {{ $props.data.electron_configuration }}</v-col
        >
      </v-row>
      <v-row>
        <v-col>Descubierto por: {{ $props.data.discovered_by }}</v-col>
        <v-col>Nombrado por: {{ $props.data.named_by }}</v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-row class="my-3 mx-2">
        {{ $props.data.summary }}
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-row class="my-1 mx-1">
        <a :href="$props.data.source" target="_blank">Wikipedia</a>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  created() {
    console.log(this.data);
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.symbol {
  text-align: center;
  font-size: 20rem;
  margin-top: -7rem;
  margin-bottom: -7rem;
}
</style>
