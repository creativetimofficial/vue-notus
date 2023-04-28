<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 pb-32 pt-12">
    <div class="px-1 md:px-10 mx-auto w-full">
      <div id="statsWallet">
        <div class="px-2 flex overflow-x-auto mb-2">
          <CardWallet v-for="w in wallets" :key="w.account_id" :statTitle="w.account_label" :statWallet="w.total_wallet"
            :statColor="w.color" :statIdWallet="w.account_id"></CardWallet>
        </div>
        <!-- Card stats -->
        <div class="flex overflow-x-auto">
          <div class="min-w px-2">
            <router-link to="/admin/graph/wallet" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="WALLET" :statTitle="wallet.statTitle + ' €'"
                  statIconColor="bg-lightBlue-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/admin/graph/wallet" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY PLANNED" :statTitle="walletPlanned.statTitle + ' €'"
                  :statArrow="walletPlanned.statArrow" :statPercent="walletPlanned.statPercent"
                  statIconName="fas fa-money-bill" statIconColor="bg-teal-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/admin/entries/type/incoming" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY INCOMING" :statTitle="incoming.statTitle + ' €'"
                  :statArrow="incoming.statArrow" :statPercent="incoming.statPercent"
                  :statPercentColor="incoming.statPercentColor" statDescripiron="Last month" statIconName="fas fa-coins"
                  statIconColor="bg-lightBlue-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/admin/entries/type/expenses" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY EXPENSES" :statTitle="expenses.statTitle + ' €'"
                  :statArrow="expenses.statArrow" :statPercent="expenses.statPercent"
                  :statPercentColor="expenses.statPercentColor" statDescripiron="Last month"
                  statIconName="fas fa-hand-holding-usd" statIconColor="bg-red-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/admin/graph/budget" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY BUDGET" :statTitle="budget.statTitle + ' €'" :statArrow="budget.statArrow"
                  :statPercent="budget.statPercent" :statPercentColor="budget.statPercentColor" statDescripiron=""
                  statIconName="fas fa-box-open" statIconColor="bg-teal-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/admin/graph/saving_month" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="SAVING MONTH" :statTitle="savings.statTitle + ' €'"
                  :statArrow="savings.statArrow" :statPercent="savings.statPercent"
                  :statPercentColor="savings.statPercentColor" statDescripiron="" statIconName="fas fa-box"
                  statIconColor="bg-lightBlue-400" />
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import CardWallet from "@/components/Cards/CardWallet.vue";
import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" };
const DOMAIN = process.env.VUE_APP_API_PATH;
const SAVING_PERCENTAGE = process.env.VUE_APP_BUDGET_SAVING_PERCENTAGE;

export default {
  components: {
    CardStats, CardWallet
  },
  data() {
    return {
      wallets: [],
      wallet: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      walletPlanned: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      incoming: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      expenses: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      budget: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      savings: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      planned: 0
    }
  },
  mounted() {
    this.update()
  },
  watch: {
    "$store.state.actions.updatestats": function (updatestats) {
      if(updatestats === true) {
        this.update()
      }
    },
  },
  methods: {
    update() {
      this.getPlanned()
      this.getMonthIncoming()
      this.getMonthexpenses()
      this.getWallet();
      this.getWallets()
    },
    getPlanned() {
      axios.get(DOMAIN + "/api/stats/month-wallet/planned").then((resp) => {

        let expenses = resp.data.data.expenses * -1
        let total = expenses - resp.data.data.incoming
        this.planned = total
        this.getMonthBudget()
        this.getWalletPlanned();

      }).catch((error) => {
        console.error(error);
      })
    },
    getWallet() {
      axios.get(DOMAIN + "/api/stats/wallet").then((resp) => {
        let data = resp.data.data
        this.wallet.statTitle = data.total.toFixed(2)
        this.getMonthBudget()
        this.getWalletPlanned();

      }).catch((error) => {
        console.error(error);
      })
    },
    getWalletPlanned() {

        let totalWallet = parseFloat(this.wallet.statTitle)
        let total = totalWallet - this.planned

        this.walletPlanned.statTitle = total.toFixed(2)
        this.getMonthBudget()

    },
    getMonthIncoming() {
      axios.get(DOMAIN + "/api/stats/month-wallet/incoming").then((resp) => {
        let data = resp.data.data
        this.incoming.statTitle = data.total_month.toFixed(2)
        this.incoming.statPercent = data.percend_different.toFixed(2)
        this.incoming.statArrow = data.percend_different <= 0 ? "down" : "up"
        this.incoming.statPercentColor = data.percend_different <= 0 ? "text-red-500" : "text-emerald-500"
        this.getMonthBudget()

      }).catch((error) => {
        console.error(error);
      })
    },
    getMonthexpenses() {
      axios.get(DOMAIN + "/api/stats/month-wallet/expenses").then((resp) => {
        let data = resp.data.data
        this.expenses.statTitle = data.total_month.toFixed(2)
        this.expenses.statPercent = data.percend_different.toFixed(2)
        this.expenses.statArrow = data.percend_different < 0 ? "down" : "up"
        this.expenses.statPercentColor = data.percend_different > 0 ? "text-red-500" : "text-emerald-500"
        this.getMonthBudget()

      }).catch((error) => {
        console.error(error);
      })
    },
    getWallets() {
      this.wallets = []
      axios.get(DOMAIN + "/api/stats/wallets").then((resp) => {
        let data = resp.data.data
        data.forEach(e => {
          this.wallets.push(e)
        });
        this.getMonthBudget()
      }).catch((error) => {
        console.error(error);
      })
    },
    getMonthBudget() {

      let savingpercentage = parseFloat(this.incoming.statTitle) * SAVING_PERCENTAGE
      savingpercentage = savingpercentage / 100
      savingpercentage = this.incoming.statTitle - savingpercentage

      let percentage = parseFloat(this.expenses.statTitle) / savingpercentage
      percentage = percentage * 100
      percentage = percentage * -1

      if(isNaN(percentage)) {
        percentage = 100
      }

      let total = savingpercentage + parseFloat(this.expenses.statTitle)
      total = total - this.planned
      
      if(total < 0) {
        total = 0
        percentage = 100
      }

      this.budget.statTitle = total.toFixed(2)
      this.budget.statPercent = percentage.toFixed(2)
      this.budget.statArrow = this.budget.statTitle < 0 ? "down" : "up"
      this.budget.statPercentColor = percentage > 100 ? "text-red-500" : "text-emerald-500"
      let _this = this
      setTimeout(function () { _this.getMonthSavings() }, 2000)


    },
    getMonthSavings() {

      let savings = parseFloat(this.incoming.statTitle) + parseFloat(this.expenses.statTitle)
      savings = savings - this.planned
      savings = savings <= 0 ? 0 : savings
      let percentage = 0
      if (savings != 0) {
        percentage = savings / parseFloat(this.incoming.statTitle)
        percentage = percentage * 100
      }

      if(isNaN(percentage)) {
        percentage = 100
      }

      this.savings.statTitle = savings.toFixed(2)
      this.savings.statPercent = percentage.toFixed(2)
      this.savings.statArrow = this.savings.statTitle <= 0 ? "down" : "up"
      this.savings.statPercentColor = percentage <= 0 ? "text-red-500" : "text-emerald-500"
    }
  }
};
</script>

<style scoped>
.min-w {
  min-width: 240px;
}

.relative.flex.flex-col.min-w-0.break-words.bg-white.rounded.mb-6.xl\:mb-0.shadow-lg {
  min-height: 115px;
}

#statsWallet a {
  min-width: 240px;
}
</style>