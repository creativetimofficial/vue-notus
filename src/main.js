import Vue from "vue";
import Dashboard from "./views/Dashboard.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

const routes = {
  "/dashboard": Dashboard,
};

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount("#app");
