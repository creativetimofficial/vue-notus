<template>
  <div class="block w-full overflow-x-auto mt-10">
    <div v-if="showModal"
      class="overflow-x-hidden overflow-y-auto mx-auto absolute inset-0 z-50 outline-none focus:outline-none justify-center items-center flex w-full md:w-6/12 px-4 left">
      <div class="relative w-auto my-6 mx-auto w-full">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              List of entries of ( {{this.name}} )
            </h3>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">

            <!-- ENTRY DETAILS -->

            <div class="container px-4 mx-auto py-3 border border-solid border-blueGray-100 shadow"
              v-for="(entry, i) in this.entries[this.index].entry" :key="i">
              <div class="flex flex-wrap">
                <div class="flex-l w-full px-4">
                  <span class="text-xs block text-emerald-500 rounded ">{{ entry.created_at }}</span>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div class="w-full px-4 flex-1">
                  <span class="text-xs block rounded text-blueGray-900">
                    {{ entry.note }}</span>
                </div>
                <div class="w-full px-4 flex-1 text-right">
                  <span class="text-sm block text-blueGray-700 rounded ">
                    {{ entry.amount }} <i class="fas fa-circle mr-2" :class="entry.amount >= 0 ? 'text-emerald-500' : 'text-red-500'"></i>
                  </span>

                </div>

              </div>

              <div class="flex flex-wrap">
                <div class="w-full px-4 flex-1">
                  <span class="text-xs mt-2 block text-blueGray-700 rounded ">

                  </span>
                </div>

                <div class="w-full px-4 flex-1 text-right">

                </div>

              </div>
            </div>

            <!-- ENTRY DETAILS -->

          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="toggleModal()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>



    <div class="container px-4 mx-auto py-3">
      <h3 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">List of all payee </h3>
    </div>



    <div class="container px-4 mx-auto py-3 border border-solid border-blueGray-100 shadow" :class="showModal ? 'opacity': ''"
      v-for="(entry, i) in this.entries" :key="i">
      <div v-on:click="toggleModal(i)" class="flex flex-wrap">
        <div class="flex-l w-full px-4">
          <span class="text-xs block text-emerald-500 rounded ">{{ entry.date }}</span>
        </div>
      </div>
      <div v-on:click="toggleModal(i)" class="flex flex-wrap">
        <div class="w-full px-4 flex-1">
          <span class="text-xs block rounded text-blueGray-900">
            {{ entry.name }}</span>
        </div>
        <div v-on:click="toggleModal(i)" class="w-full px-4 flex-1 text-right">
          <span class="text-sm block text-blueGray-700 rounded ">
            {{ entry.amount }} <i :class="'fas fa-circle ' + entry.color_amount + ' mr-2'"></i>
          </span>

        </div>

        <div class="flex-l">
          <PayeeActionDropdown :entryId="entry.id" />
        </div>

      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-4 flex-1">
          <span class="text-xs mt-2 block text-blueGray-700 rounded ">

          </span>
        </div>

        <div class="w-full px-4 flex-1 text-right">

        </div>

      </div>
    </div>

  </div>
</template>
<script>

import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" }
const DOMAIN = process.env.VUE_APP_API_PATH_V2
import PayeeActionDropdown from "@/components/Dropdowns/PayeeActionDropdown.vue";

export default {
  components: {
    PayeeActionDropdown
  },
  data() {
    return {
      entries: [],
      index: null,
      showModal: false,
      name: null
    }
  },
  mounted() {
    this.getPlannedEntries()
  },
  methods: {
    toggleModal: function(i){
      this.index = i
      this.showModal = !this.showModal;
      this.name = this.entries[i].name
    },
    getPlannedEntries() {
      axios.get(DOMAIN + "/api/debit/get-total/entry").then((resp) => {
        let debitColor = "text-red-500"

        resp.data.data.forEach(e => {
          debitColor = "text-red-500"
          if (e.amount >= 0) {
            debitColor = "text-emerald-500"
          }

          if (e.type == 1) {
            debitColor = "text-blueGray-400"
          }

          let info = {
            id: e.id,
            date: e.created_at,
            color_amount: debitColor,
            name: e.name,
            amount: e.amount.toFixed(2) + " €",
            entry: e.entry
          }

          this.entries.push(info)
        });

      }).catch((error) => {
        console.error(error);
      })
    }
  }
}
</script>

<style>
.opacity {
  opacity: 0.3;
}
.left {
  margin-left:25%;
}
</style>