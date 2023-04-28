<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <CardSearchEntries/>
    </div>
  </div>
</template>
<script>
import CardSearchEntries from "@/components/Cards/CardSearchEntries.vue";

export default {
  components: {
    CardSearchEntries
  },
};
</script>
