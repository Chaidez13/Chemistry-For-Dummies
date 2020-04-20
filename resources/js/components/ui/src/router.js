import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const router = new Router({
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
      path: "/logout",
      name: "logout",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/UserLogout.vue")
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
    }
  ],
});

router.beforeEach((to, from, next) => {
  //necessary logic to resolve the hook
  if(to.name !== 'home' && to.name !== 'usuario' && !store.getters.auth) next({name: 'usuario'})
  else next()
 })

export default router