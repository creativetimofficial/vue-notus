import React from "react";

// components

import CardSettings from "@/components/Cards/CardSettings.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";

export default function Settings() {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
