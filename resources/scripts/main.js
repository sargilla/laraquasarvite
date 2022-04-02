// FILE: main.js

import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/es";
import routes from "../routes/index";
import quasarIconSet from "quasar/icon-set/svg-mdi-v6";
import { createRouter, createWebHistory } from "vue-router";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);

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

Router.beforeEach((to, from, next) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    // if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // if (to.meta.requiresAuth) {
    //     // this route requires auth, check if logged in
    //     // if not, redirect to login page.
    //     return {
    //         path: "/login",
    //         // save the location we were at to come back later
    //         query: { redirect: to.fullPath },
    //     };
    // }
    if (to.name !== "Login" && to.meta.requiresAuth)
        next({ name: "Login", query: { redirect: to.fullPath } });
    else next();
});

myApp.use(Router);
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
