<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-1">
      <CardEntries />
    </div>
  </div>
</template>
<script>
import CardEntries from "@/components/Cards/CardEntries.vue";

export default {
  components: {
    CardEntries
  },
};
</script>
