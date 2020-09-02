import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "./views/Dashboard.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

Vue.config.productionTip = false;

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '*', redirect: '/dashboard' }
];

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount("#app");
