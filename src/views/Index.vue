<template>
  <div>
    <index-navbar />

    <!-- BODY -->

    <section class="bg-blue-200 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6">Manage Your Budget Simply and Intelligently</h1>
          <p class="text-lg text-gray-800">Our app helps you track your expenses, plan your budget, and achieve your
            financial goals.</p>
          <a href="#" class="mt-8 inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg">Download the App</a>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <img src="your-image.jpg" alt="Budget management" class="w-full rounded-lg">
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Track Your Expenses</h2>
            <p class="text-gray-800">Our app allows you to easily input all your daily expenses, organize them into
              categories, and keep track of your spending.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-blue-200 py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl font-bold mb-4">Plan Your Budget</h2>
            <p class="text-gray-800">Our app enables you to set a monthly budget, define spending categories, and monitor
              your progress in achieving your financial goals.</p>
          </div>
          <div>
            <img src="your-image.jpg" alt="Budget planning" class="w-full rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <img src="your-image.jpg" alt="Financial goals" class="w-full rounded-lg">
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Achieve Your Financial Goals</h2>
            <p class="text-gray-800">Our app helps you define financial goals, such as saving for a vacation or a home
              purchase, and provides guidance to help you reach them.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NO BODY -->

    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
