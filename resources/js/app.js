/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Vuex from 'vuex';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.component('mainview', require('./components/ui/src/App.vue').default);

const app = new Vue({
    el: '#app',s
});
