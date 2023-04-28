<template>
  <div  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div  v-if="this.settings == 'planned'">
      <PlannedSettings />
    </div>
    <div  v-if="this.settings == 'profile'">
      <CardProfile />
    </div>
    <div  v-if="this.settings == 'payee'">
      <CardPayee />
    </div>
  </div>
</template>

<script>
import PlannedSettings from "@/components/Cards/Settings/Planned.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
import CardPayee from "@/components/Cards/Settings/CardPayee.vue";

export default {
  data() {
    return {
      settings: "generic"
    }
  },
  components: {
    PlannedSettings,
    CardProfile,
    CardPayee
  },
  mounted() {
    this.settings = this.$route.params.setting_type
  },
  watch: {
    '$route.params.setting_type': function (setting_type) {
      this.settings = setting_type
    },
  }
}
</script>