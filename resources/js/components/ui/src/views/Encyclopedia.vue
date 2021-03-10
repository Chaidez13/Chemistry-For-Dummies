<template>
  <v-col>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="elementData"
        :search="search"
        :items-per-page="20"
        :loading="loading"
        loading-text="Cargando los elementos, por favor espere."
        @click:row="handleClick"
      ></v-data-table>
    </v-card>
  </v-col>
</template>

<script>
import { glossary } from "../../utils/services";

export default {
  name: "Encyclopedia",
  data: () => ({
    search: "",
    headers: [
      { text: "Número Atomico", value: "number" },
      { text: "Símbolo", value: "symbol" },
      { text: "Nombre", value: "name" },
      { text: "Masa Atomica", value: "atomic_mass" },
    ],
    elementData: [],
    loading: true,
  }),
  mounted() {
    this.chargeTable();
  },
  methods: {
    chargeTable: function() {
      glossary().then(({ data }) => {
        this.elementData = data.elements;
        this.loading = false;
      }).catch((e) => 
        console.error(e)
      )
    },
    handleClick: function(e) {
      this.$router.push({name: 'elementData', params: {id: e.number, data: e} });
    },
  },
};
</script>

<style></style>
