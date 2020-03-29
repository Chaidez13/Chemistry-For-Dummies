<template>
  <v-container>
    <v-list subheader two-line>
      <v-subheader>Opciones de Usuario</v-subheader>

      <v-list-item @click>
        <v-list-item-content>
          <v-list-item-title>Actualizar datos</v-list-item-title>
          <v-list-item-subtitle>Cambiar la contraseña o el correo electronico</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click>
        <v-list-item-content>
          <v-list-item-title>Borar datos</v-list-item-title>
          <v-list-item-subtitle>
            Reiniciar todo el progreso en todos los juegos de Chemistry For
            Dummies (Acción irreversible)
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click>
        <v-list-item-content>
          <v-list-item-title>Eliminar cuenta</v-list-item-title>
          <v-list-item-subtitle>
            Borrrar cuenta de usuario de Chemistry For Dummies (Acción
            irreversible)
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list flat subheader two-line>
      <v-subheader>Opciones Generales</v-subheader>

      <v-list-item-group v-model="settings" multiple active-class>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notificaciones</v-list-item-title>
              <v-list-item-subtitle>
                Recibira correos con noticias o actualizaciones de Chemistry
                For Dummies
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sonido</v-list-item-title>
              <v-list-item-subtitle>Permite todos los sonidos</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>
    <v-list flat subheader two-line>
      <v-list-item @click>
        <v-list-item-content>
          <v-list-item-title>Reportar Error</v-list-item-title>
          <v-list-item-subtitle>Reportar alguna anomalia en el sistema.</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      settings: [],
      dialog: false
    };
  },
  methods: {}
};
</script>
