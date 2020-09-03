import React from "react";

// components

import CardTable from "@/components/Cards/CardTable.vue";

export default function Tables() {
  return (
    <>
      <div class="flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div class="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
