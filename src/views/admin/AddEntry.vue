<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <CardAddEntry :entryId="this.$route.query.entry_id" :isPlanned="this.$route.query.planned" :typeOfEntry="this.$route.query.type" />
    </div>
  </div>
</template>
<script>
import CardAddEntry from "@/components/Cards/CardAddEntry.vue";

export default {
  components: {
    CardAddEntry
  },
};
</script>
