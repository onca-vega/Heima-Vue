import Vue from "vue";

import { store } from "./store/store.js";
import { router } from "./routing/routing.js";

import App from "./App.vue";

import "./../file/system/manifest.json";

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
