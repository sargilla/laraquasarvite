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

myApp.use(Router);
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
