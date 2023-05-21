<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-1 md:px-10 mx-auto w-full -m-24">
        <HeaderMenu />
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import HeaderMenu from "@/components/Navbars/HeaderMenu.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import AuthService from "../services/AuthService.vue";

export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    HeaderMenu,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
  async beforeMount() {
    try {
      const _this = this
      AuthService.check().catch((response) => {
        console.log("res", response)
        _this.$router.push({ path: 'auth' })
      });
    } catch {
      this.$router.push({ path: 'auth' })
    }
  }
};
</script>
