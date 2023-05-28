import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";
import Index from "@/views/Index.vue";

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

// routes

const routes = [
  {
    path: "/app",
    redirect: "/app/dashboard",
    name: 'app',
    component: Admin,
    children: [
      {
        path: "/app/dashboard",
        component: Dashboard,
      },
      {
        path: "/app/add_entry",
        name: 'add_entry',
        component: AddEntry,
      },
      {
        path: "/app/entries/:account_id",
        component: MyEntries,
        children: [
          {
            path: "/app/entries/type/:filter_type",
            component: MyEntries,
          },
          {
            path: "/app/entries/:account_id/category-:category_id",
            component: MyEntries,
          },
          {
            path: "/app/entries/:account_id/label-:label_id",
            component: MyEntries,
          }
        ]
      },
      {
        path: "/app/import",
        component: ImportEntries,
      },
      {
        path: "/app/search",
        component: SearchEntries,
      },

      {
        path: "/app/see_all/:type",
        component: EntriesResume,
      },
      {
        path: "/app/settings/",
        component: Settings,
        children: [
          {
            path: "/app/settings/:setting_type",
            component: Settings,
          }
        ]
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
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
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router)
app.mount("#app")