import Vue from "vue";
import Router from "vue-router";
import storage from "./utils/storage";
import Home from "./views/Home.vue";
import HomeIndex from "./views/HomeIndex.vue";
import HomeDiscover from "./views/HomeDiscover.vue";
import HomeServices from "./views/HomeServices.vue";
import HomeUser from "./views/HomeUser.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      //redirect: '/Login',
      children: [
        {
          path: "/",
          name: "homeIndex",
          component: HomeIndex
        },
        {
          path: "discover",
          name: "homeDiscover",
          component: HomeDiscover
        },
        {
          path: "services",
          name: "homeServices",
          component: HomeServices
        },
        {
          path: "user",
          name: "homeUser",
          component: HomeUser
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/test",
      name: "other",
      beforeEnter(to, from, netx) {
        window.location = "/test";
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("to:", to, "\nfrom:", from);

  const token = storage.get("authToken");
  if (!token && !["login", "reg", "passworld"].includes(to.name)) {
    next({
      name: "login"
    });
  } else if (token && ["login", "reg", "passworld"].includes(to.name)) {
    next({
      name: "homeIndex"
    });
  } else {
    next();
  }
});

export default router;
