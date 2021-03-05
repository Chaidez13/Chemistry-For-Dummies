/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import Vuex, { Store } from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'
import router from './components/ui/src/router';
import store from './components/ui/src/store';
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './components/ui/src/plugins/vuetify'

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter)
Vue.component('mainview', require('./components/ui/src/App.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    store: store,
    router: router,
});
