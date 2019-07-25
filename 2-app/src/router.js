import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/service",
      name: "service",
      component: () =>
          import("./views/Service.vue")
    },
    {
      path: "/scene",
      name: "scene",
      component: () =>
          import("./views/Scene.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
          import("./views/About.vue")
    },
    {
      path: "*",
      name: "404",
      component: () =>
          import("./views/NotFound.vue")
    }
  ]
});
