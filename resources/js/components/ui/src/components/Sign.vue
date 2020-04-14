<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="620">
      <v-card max-width="616">
        <v-form ref="form">
          <v-card-title>
            <span v-if="registro" class="headline">Registrarse</span>
            <span v-if="!registro" class="headline">Iniciar Sesión</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col v-if="registro" cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nombre(s)*"
                    v-model="nombre"
                    :rules="[() => !!nombre || 'Este campo es obligatorio.']"
                  ></v-text-field>
                </v-col>
                <v-col v-if="registro" cols="12" sm="6" md="4">
                  <v-text-field
                    label="Primer Apellido*"
                    v-model="primerApellido"
                    :rules="[() => !!primerApellido || 'Este campo es obligatorio.']"
                  ></v-text-field>
                </v-col>
                <v-col v-if="registro" cols="12" sm="6" md="4">
                  <v-text-field label="Segundo Apellido" v-model="segundoApellido"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Correo*"
                    v-model="email"
                    :rules="[() => !!email || 'Este campo es obligatorio.']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Contraseña*"
                    type="password"
                    v-model="pass"
                    :rules="[() => !!pass || 'Este campo es obligatorio.']"
                    hint="Lonitud mínima de 8 caracteres"
                  ></v-text-field>
                </v-col>
                <v-col v-if="registro" cols="12">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Fecha de Nacimiento*"
                        :rules="[() => !!date || 'Este campo es obligatorio.']"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" :max="actual" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col v-if="error" cols="12"></v-col>
              </v-row>
            </v-container>
            <small>*Campos obligatorios</small>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6">
                <v-btn
                  v-if="!registro"
                  color="blue darken-1"
                  text
                  @click="registro=true"
                >No tengo una cuenta</v-btn>
                <v-btn
                  v-if="registro"
                  color="blue darken-1"
                  text
                  @click="registro=false"
                >Ya tengo una cuenta</v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$router.go(-1)">Cancelar</v-btn>
                <v-btn v-if="registro" color="blue darken-1" text @click="registrarse">Registrarse</v-btn>
                <v-btn v-if="!registro" color="blue darken-1" text @click="login">Inicar Sesión</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';

export default {
  data: () => ({
    dialog: true,
    email: null,
    pass: null,
    nombre: null,
    primerApellido: null,
    segundoApellido: "",
    registro: false,
    error: false,
    date: "",
    actual: new Date().toISOString().substr(0, 10),
    modal: ""
  }),
  methods: {
   login: async function(){
      await axios.post('/login',{
        email: this.email,
        password: this.pass,
      },{
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
      })
    },
    registrarse: async function() {
      await axios.post('/registro/user',{
        nombre: this.nombre,
        apellidoPaterno: this.primerApellido,
        apellidoMaterno: this.segundoApellido,
        email: this.email,
        password: this.pass,
        fecha: this.date,
      }).then(() => console.log('Registro Exitoso')).catch(()=> console.log(error))
      this.$router.push({ name: "home" });
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
      }
    }
  },
  computed: {
    ...mapState(["sesion"])
  }
};
</script>