import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Games.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/games",
      name: "games",
      component: () =>
        import(/* webpackChunkName: "Games" */ "./views/Games.vue")
    },
    {
      path: "/usuario",
      name: "usuario",
      component: () =>
        import(/* webpackChunkName: "Usuario" */ "./views/Usuario.vue")
    },
    {
      path: "/options",
      name: "options",
      component: () =>
        import(/* webpackChunkName: "Options" */ "./views/Options.vue")
    },
    {
      path: "/game/:id",
      name: "game",
      component: () =>
        import(/* webpackChunkName: "GameID" */ "./views/Game.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "Dashboard" */ "./views/Dashboard.vue")
    },
  ]
});
