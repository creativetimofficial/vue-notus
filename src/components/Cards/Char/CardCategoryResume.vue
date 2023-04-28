<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            {{ title }}
          </h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <a :href="'/see_all/' + path"
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            See all
          </a>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              {{ path }} NAME
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              AMOUNT
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              AMOUNT BEFORE
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              BOUNCE RATE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, i) in elements" :key="i">
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
              {{ d.label }}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ d.amount }}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ d.amount_before }}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas mr-4" :class="[d.bounce_rate < 0 ? 'fa-arrow-down text-emerald-500' : 'fa-arrow-up text-red-500']
              "></i>
              {{ d.bounce_rate }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" };
const DOMAIN = process.env.VUE_APP_API_PATH;

export default {
  props: {
    path: {
      type: String,
      required: true,
      default: "category"
    },
    title: {
      type: String,
      required: true
    },
  },
  watch: {
    "$store.state.filter_graph.year": function () {
      this.elements = []
      this.elementsBefore = []
      this.getAllData()
    },
    "$store.state.filter_graph.month": function () {
      this.elements = []
      this.elementsBefore = []
      this.getAllData()
    },
  },
  data() {
    return {
      elements: [],
      elementsBefore: [],
      months: ["01","02","03","04","05","06","07","08","09","10","11","12"],
    }
  },
  mounted() {
    this.getAllData()
  },
  methods: {
    getAllData: function () {

      let currentMonth = this.$store.state.filter_graph.month
      let year = this.$store.state.filter_graph.year
      let date = new Date

      if (currentMonth === null) {
        currentMonth = date.getMonth()
      }

      if (year === null) {
        year = date.getFullYear()
      }

      currentMonth = this.months[currentMonth]

      let data = {
        timeStart: year + "/" + currentMonth + "/01",
        timeEnd: year + "/" + currentMonth + "/31"
      }

      axios.post(DOMAIN + "/api/stats/graph/" + this.path, data).then((resp) => {
        let response = resp.data
        response.forEach(element => {

          let total = element.total
          total = parseFloat(total).toFixed(2)

          this.elements.push({
            label: element.label,
            amount: total,
            amount_before: 0,
            bounce_rate: 100
          })


        });
        this.getAllDataBefore()
      }).catch((error) => {
        console.error(error);
      })
    },

    getAllDataBefore: function () {

      let currentMonth = this.$store.state.filter_graph.month
      let year = this.$store.state.filter_graph.year
      let date = new Date

      if (currentMonth === null) {
        currentMonth = date.getMonth()
      }

      if (year === null) {
        year = date.getFullYear()
      }

      currentMonth = currentMonth - 1
      if (currentMonth < 0) {
        currentMonth = 11
        year = year - 1
      }

      currentMonth = this.months[currentMonth]

      let data = {
        timeStart: year + "/" + currentMonth + "/01",
        timeEnd: year + "/" + currentMonth + "/31"
      }

      axios.post(DOMAIN + "/api/stats/graph/" + this.path, data).then((resp) => {
        let response = resp.data
        response.forEach(element => {

          let total = element.total
          total = parseFloat(total).toFixed(2)
          let found = false

          this.elements.forEach(data => {
            if (data.label == element.label) {
              data.amount_before = total
              data.bounce_rate = this.calculateBounceRate(data.amount, element.total)
              found = true
            }
          });

          this.elementsBefore.push({
            label: element.label,
            amount: 0,
            amount_before: total,
            bounce_rate: -100,
            found: found
          })

        });

        this.elementsBefore.forEach(element => {
          if(element.found === false) {
            this.elements.push(element)
          }
        });

      }).catch((error) => {
        console.error(error);
      })
    },
    calculateBounceRate: function (amount, amountBefore) {
      if (amountBefore < 0) {
        amountBefore = amountBefore * -1
      }

      if (amount < 0) {
        amount = amount * -1
      }

      let result = ((amount - amountBefore) / amountBefore) * 100

      return result.toFixed(0)
    }
  }
}
</script>

