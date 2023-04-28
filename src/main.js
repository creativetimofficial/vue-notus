import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import AddEntry from "@/views/admin/AddEntry.vue";
import Settings from "@/views/admin/Settings.vue";
import MyEntries from "@/views/admin/MyEntries.vue";
import ImportEntries from "@/views/admin/ImportEntries.vue";
import SearchEntries from "@/views/admin/SearchEntries.vue";
import EntriesResume from "@/views/admin/EntriesResume.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";

//vuex store data
import store from "./store";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/add_entry",
        component: AddEntry,
      },
      {
        path: "/admin/entries/:account_id",
        component: MyEntries,
        children: [
          {
            path: "/admin/entries/type/:filter_type",
            component: MyEntries,
          },
          {
            path: "/admin/entries/:account_id/category-:category_id",
            component: MyEntries,
          },
          {
            path: "/admin/entries/:account_id/label-:label_id",
            component: MyEntries,
          }
        ]
      },
      {
        path: "/admin/import",
        component: ImportEntries,
      },
      {
        path: "/admin/search",
        component: SearchEntries,
      },

      {
        path: "/see_all/:type",
        component: EntriesResume,
      },
      {
        path: "/admin/settings/",
        component: Settings,
        children: [
          {
            path: "/admin/settings/:setting_type",
            component: Settings,
          }
        ]
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Admin,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store)
app.use(router)
app.mount("#app")