<template>
  <navbar />
  <main>
    <section class="absolute w-full h-full">
      <div
        class="absolute top-0 w-full h-full bg-gray-900"
        :style="`background-image: url('${registerBg2}'), background-size: 100%, background-repeat: no-repeat`"
      ></div>
      <router-view />
      <FooterSmall absolute />
    </section>
  </main>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
  components: {
    Navbar,
    FooterSmall,
  },
};
</script>
