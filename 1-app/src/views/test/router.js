import Vue from "vue";
import Router from "vue-router";
import About from "./About.vue";
import Home from "./Home.vue";
import Err from "./Err.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL+"test/",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      name: "404",
      component: Err
    },
  ]
});
