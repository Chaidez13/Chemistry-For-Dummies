<template>
  <v-app>
    <v-content>
      <v-row align="center" justify="center">
        <router-view />
      </v-row>
    </v-content>

    <v-navigation-drawer app>
      <v-list-item class="px-2" @click="userValidation">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-if="sesion">John Leider</v-list-item-title>
          <v-list-item-title v-if="!sesion">Iniciar Sesión</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="(item,i) in opciones" :key="i" link @click="changeOption(item.ruta)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.opcion }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
    drawer: null,
    opciones: [
      { opcion: "Juegos", icon: "mdi-gamepad-variant", ruta: "/" },
      { opcion: "Opciones", icon: "mdi-cogs", ruta: "/options" },
      {
        opcion: "Estadisticas",
        icon: "mdi-google-analytics",
        ruta: "/dashboard"
      },
      { opcion: "Cerrar sesión", icon: "mdi-logout", ruta: "/" }
    ]
  }),
  computed: {
    ...mapState(["sesion"])
  },
  methods: {
    userValidation() {
      if (!this.sesion) this.$router.push({ name: "usuario" });
    },
    changeOption(ruta) {
      const actual = this.$route.path;
      if (ruta != actual) this.$router.push({ path: ruta });
    }
  }
};

//https://github.com/neelpatel05/periodic-table-api
</script>


