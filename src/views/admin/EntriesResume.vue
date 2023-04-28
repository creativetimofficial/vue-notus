<template>
  <div class="mt-10">
    <div class="py-5">
      <FilterBar />
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">
                  Resume of all entries
                </h3>
              </div>
            </div>
          </div>
          <div class="block w-full overflow-x-auto">

            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th width="200"
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    {{ $route.params.type }} NAME
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
                <tr v-for="(d, i) in incoming" :key="i">
                  <th width="200"
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
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

                <tr>
                  <th width="200"
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-emerald-500">
                    TOTAL
                  </th>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-emerald-500">
                    {{ total.incoming.current }}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-emerald-500">
                    {{ total.incoming.before }}
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fas mr-4" :class="[total.incoming.bounce_rate < 0 ? 'fa-arrow-down text-emerald-500' : 'fa-arrow-up text-red-500']
                    "></i>
                    {{ total.incoming.bounce_rate }}%
                  </td>
                </tr>

              </tbody>
            </table>

            <!-- Projects table -->
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th width="200"
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    {{ $route.params.type }} NAME
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
                <tr v-for="(d, i) in expenses" :key="i">
                  <th width="200"
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
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

                <tr>
                  <th width="200"
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-red-500">
                    TOTAL
                  </th>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-red-500">
                    {{ total.expenses.current }}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-red-500">
                    {{ total.expenses.before }}
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fas mr-4" :class="[total.expenses.bounce_rate < 0 ? 'fa-arrow-down text-emerald-500' : 'fa-arrow-up text-red-500']
                    "></i>
                    {{ total.expenses.bounce_rate }}%
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FilterBar from "@/components/Navbars/FilterBar.vue";
// const X_API_KEY = { "X-API-KEY": "7221" };
const DOMAIN = process.env.VUE_APP_API_PATH;

export default {
  components: {
    FilterBar
  },
  watch: {
    "$store.state.filter_graph.year": function () {
      this.incoming = []
      this.expenses = []
      this.getAllData("expenses")
      this.getAllData("incoming")
    },
    "$store.state.filter_graph.month": function () {
      this.incoming = []
      this.expenses = []
      this.getAllData("expenses")
      this.getAllData("incoming")
    },
  },
  data() {
    return {
      incoming: [],
      expenses: [],
      incomingBefore: [],
      expensesBefore: [],
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      total: {
        incoming: {
          current: 0,
          before: 0,
          bounce_rate: 100
        },
        expenses: {
          current: 0,
          before: 0,
          bounce_rate: 100
        }
      }
    }
  },
  mounted() {
    this.getAllData("expenses")
    this.getAllData("incoming")
  },
  methods: {
    getAllData: function (type) {

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

      axios.post(DOMAIN + "/api/stats/graph/" + this.$route.params.type + "/" + type, data).then((resp) => {
        let response = resp.data
        let totalIncoming = 0
        let totalExpenses = 0
        response.forEach(element => {

          let total = element.total
          total = parseFloat(total).toFixed(2)

          if (type == "expenses") {
            this.expenses.push({
              label: element.label,
              amount: total,
              amount_before: 0,
              bounce_rate: 100
            })

            totalExpenses = totalExpenses + parseFloat(total)
            this.total.expenses.current = totalExpenses.toFixed(2)
          } else {
            this.incoming.push({
              label: element.label,
              amount: total,
              amount_before: 0,
              bounce_rate: 100
            })

            totalIncoming = totalIncoming + parseFloat(total)
            this.total.incoming.current = totalIncoming.toFixed(2)
          }

        });
        this.getAllDataBefore(type)
      }).catch((error) => {
        console.error(error);
      })
    },

    getAllDataBefore: function (type) {

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

      axios.post(DOMAIN + "/api/stats/graph/" + this.$route.params.type + "/" + type, data).then((resp) => {
        let response = resp.data
        let totalIncoming = 0
        let totalExpenses = 0

        response.forEach(element => {

          let total = element.total
          total = parseFloat(total).toFixed(2)

          if (type == "expenses") {
          let found = false

            this.expenses.forEach(data => {
              if (data.label == element.label) {
                data.amount_before = total
                totalExpenses = totalExpenses + parseFloat(total)
                data.bounce_rate = this.calculateBounceRate(data.amount, element.total)
                found = true
              }
            });

            this.total.expenses.before = totalExpenses.toFixed(2)

            this.expensesBefore.push({
              label: element.label,
              amount: 0,
              amount_before: total,
              bounce_rate: -100,
              found: found
            })

          } else {
          let found = false

            this.incoming.forEach(data => {
              if (data.label == element.label) {
                data.amount_before = total
                totalIncoming = totalIncoming + parseFloat(total)
                data.bounce_rate = this.calculateBounceRate(data.amount, element.total)
                found = true
              }
            });

            this.total.incoming.before = totalIncoming.toFixed(2)

            this.incomingBefore.push({
              label: element.label,
              amount: 0,
              amount_before: total,
              bounce_rate: -100,
              found: found
            })
          }

        });

        if (type == "expenses") {
            this.expensesBefore.forEach(element => {
              if (element.found === false) {
                this.expenses.push(element)
                this.total.expenses.before = parseFloat(this.total.expenses.before) + parseFloat(element.amount_before)
              }
            })
          } else {
            this.incomingBefore.forEach(element => {
              if (element.found === false) {
                this.incoming.push(element)
                this.total.incoming.before = parseFloat(this.total.incoming.before) + parseFloat(element.amount_before)
              }
            })
          }

          this.total.expenses.before = this.total.expenses.before.toFixed(2)
          this.total.incoming.before = this.total.incoming.before.toFixed(2)
          this.total.incoming.bounce_rate = this.calculateBounceRate(this.total.incoming.current, this.total.incoming.before)
          this.total.expenses.bounce_rate = this.calculateBounceRate(this.total.expenses.current, this.total.expenses.before)


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


