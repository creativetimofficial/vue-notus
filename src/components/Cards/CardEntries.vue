<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="lg:w-2/12 px-2">
          <h3 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Wallet
          </h3>
        </div>
        <div class="lg:w-8/12 px-2">
          <input v-model="wallet" type="tel" placeholder="0,00 €"
            class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        </div>
        <div class="lg:w-2/12 px-2">
          <button v-on:click="fixWallet()"
            class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            FIX WALLET
          </button>
        </div>
        <div class="lg:w-2/12 px-2">
          <button v-on:click="$refs.entries.resetFilter()" v-if="action.reset"
            class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            RESET FILTER
          </button>
        </div>
      </div>
    </div>

    <EntriesTable ref="entries" />

  </div>
</template>
<script>

import EntriesTable from "@/components/GenericComponents/EntriesTable.vue";

import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" }
const DOMAIN = process.env.VUE_APP_API_PATH

export default {
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      filter: "",
      wallet: 0,
      selected: {
        account: 0
      },
      action: {
        reset: true
      },
    }
  },
  components: {
    EntriesTable
  },
  mounted() {

  },
  methods: {
    fixWallet() {

      let data = {
        amount: this.wallet,
        account_id: this.selected.account
      }

      axios.post(DOMAIN + "/api/stats/wallet", data).then((resp) => {
        //TODO: inserire un messaggio
        console.log(resp)
      }).catch((error) => {
        this.action.alert = true
        this.action.alert_message = "Ops... An error occured"
        console.error(error);
      })
    },
    get(path, callBack) {
      axios.get(path).then((resp) => {
        callBack(resp.data)
      }).catch((error) => {
        console.error(error);
      })
    }
  }
};
</script>

<style scoped>
.transfer-color {
  background-color: #ffe08738;
}
</style>