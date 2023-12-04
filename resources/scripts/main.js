// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import { createApp } from "vue";

import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v6";
import quasarLang from "quasar/lang/es";
// register directive v-money and component <money>
import money from "v-money";
import { createRouter, createWebHistory } from "vue-router";

import axios from "@/boot/axios";

import routes from "../routes/index";
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);

myApp.use(money, {
    decimal: ".",
    thousands: ",",
    prefix: "$ ",
    suffix: "",
    precision: 2,
    masked: false /* doesn't work with directive */,
});
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
    /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
});

const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    mode: "history", // quasar.conf.js -> build -> publicPath
    history: createWebHistory(),
    hashbang: false,
});

/* Can mixin for route filter v-if="can('dashboard') " */
// Vue.mixin({
//   methods: {
//      can: (key) => Laravel.user && Laravel.user.permissions.includes(key)
//   }
// })

const userLogged = async () => {
    if (localStorage.getItem("userLogged")) {
        return JSON.parse(localStorage.getItem("userLogged"));
    } else {
        let data = await axios.get("/api/is-logged").data;
        if (data) {
            // console.log("guardando");
            localStorage.setItem("userLogged", JSON.stringify(data));
        }
        return data;
    }
};

Router.beforeEach(async (to, from, next) => {
    let userLogged = false;

    if (localStorage.getItem("userLogged")) {
        userLogged = JSON.parse(localStorage.getItem("userLogged"));
    } else {
        let data = await axios.get("/api/is-logged");
        if (data.data) {
            userLogged = data.data;
        }
    }

    // console.log(userLogged);
    if (to.name !== "Login" && to.meta.requiresAuth && !userLogged)
        next({ name: "Login", query: { redirect: to.fullPath } });
    else next();
    /*
      For permissiones in routes

      if (to.meta.permissions && to.meta.permissions.length > 0) {
        let isAllowed = user && user.permissions.some(p => to.meta.permissions.includes(p))

        if (! isAllowed) return next('/')
     }
    */
});

myApp.use(Router);
myApp.mount("#app");
